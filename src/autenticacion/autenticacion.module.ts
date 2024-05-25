import { Module } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AutenticacionService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AutenticacionModule {}
