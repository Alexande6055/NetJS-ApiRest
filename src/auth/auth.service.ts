import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/Login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ password, username }: RegisterDto) {
    const user = await this.usuarioService.findByOneByUserName(username);
    if (user) {
      throw new BadRequestException('Usuario ya Existente');
    }
    return await this.usuarioService.create({
      password: await bcryptjs.hash(password, 10),
      username,
    });
  }

  async login({ password, username }: LoginDto) {
    const user = await this.usuarioService.findByOneByUserName(username);
    if (!user) {
      throw new UnauthorizedException('Usuario no Encontrado');
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { username: user.username };
    const token = await this.jwtService.signAsync(payload);
    return {
      token,
      //user,
    };
  }
}

//JWT--------------------------------------------------
