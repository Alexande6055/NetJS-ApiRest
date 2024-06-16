import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/Login.dto';
import { CreateProductoDto } from 'src/productos/dto/create-producto.dto';
import { Request } from 'express';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
//separar modulo interface
interface RequestWithUser extends Request {
  user: {
    username: string;

    role: string[];
  };
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //pruebas
  @Post('productos')
  productos(@Body() createProductoDto: CreateProductoDto) {
    return this.authService.productos(createProductoDto);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  //implementacion de Autenticacion por jwt
  @Get('profile')
  //@Roles([Role.ADMIN])
  //carga el canActive del AuthGuard y lo usa el RolesGuard
  //@UseGuards(AuthGuard, RolesGuard)
  @Auth(Role.ADMIN)
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile({
      username: req.user.username,
      rol: req.user.role,
    });
  }
  @Get('verificacion')
  verificacion(@Headers('authorization') authHeader: string) {
    const token = authHeader?.split(' ')[1];
    if (!token) {
      throw new Error('Token no proporcionado');
    }
    return this.authService.verificacion(token);
  }
}
