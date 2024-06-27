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
import { ApiBody, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
//separar modulo interface
interface RequestWithUser extends Request {
  user: {
    username: string;

    role: string[];
  };
}
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiBody({ type: RegisterDto })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiBody({ type: LoginDto })
  @ApiOperation({ summary: 'Obtener el perfil del usuario autenticado' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  @Get('verificacion')
  @ApiOperation({ summary: 'Verificar el token de autenticación' })
  @ApiHeader({
    name: 'authorization',
    description: 'Bearer token de autenticación',
  })
  verificacion(@Headers('authorization') authHeader: string) {
    const token = authHeader?.split(' ')[1];
    if (!token) {
      throw new Error('Token no proporcionado');
    }
    return this.authService.verificacion(token);
  }
}
