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
import { CreateProductoDto } from 'src/productos/dto/create-producto.dto';
import { ProductosService } from 'src/productos/productos.service';
import { SourceTextModule } from 'vm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
    private readonly productoService: ProductosService,
  ) {}
  //---------------

  productos(createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  //-----------

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

  async login(login: LoginDto) {
    const user = await this.usuarioService.findByOneByUserName(login.username);
    if (!user) {
      throw new UnauthorizedException('Usuario no Encontrado');
    }
    const isPasswordValid = await bcryptjs.compare(
      login.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
    const usuario = await this.usuarioService.obtenerPermisos(user.username);
    const id_carrito_compra = await this.usuarioService.obtenerCarrito(
      user.username,
    );
    const payload = {
      username: user.username,
      role: usuario,
      id_carrito: id_carrito_compra,
    };

    const token = await this.jwtService.signAsync(payload);
    return {
      token,
      //usuario,
    };
  }
  async profile({ username, rol }: { username: string; rol: string[] }) {
    const user = await this.usuarioService.findByOneByUserName(username);
    return { user, rol };
  }
  async verificacion(token: string): Promise<boolean> {
    try {
      this.jwtService.verify(token);
      return true;
    } catch (err) {
      return false;
    }
  }
}

//JWT--------------------------------------------------
