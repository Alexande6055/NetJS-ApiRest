import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/Login.dto';
import { AuthGuard } from './guard/auth.guard';
import { CreateProductoDto } from 'src/productos/dto/create-producto.dto';
import { Request } from 'express';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
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
  @Roles(['admin'])
  @UseGuards(AuthGuard, RolesGuard)
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile({
      username: req.user.username,
      rol: req.user.role,
    });
  }

  //pruebas
  @Post('productos')
  productos(@Body() createProductoDto: CreateProductoDto) {
    return this.authService.productos(createProductoDto);
  }
}
