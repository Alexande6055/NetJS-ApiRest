import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'Contraseña para el registro',
    minLength: 8,
    example: 'password123',
  })
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(8)
  @ApiProperty({
    description: 'Correo para Registrar',
    minLength: 4,
    example: 'example@example.com',
  })
  password: string;
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(4)
  username: string;
}
