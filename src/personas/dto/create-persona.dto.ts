import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePersonaDto {
  @ApiProperty({
    description: 'El nombre de la persona',
    example: 'Juan',
  })
  @IsString()
  @MinLength(3)
  nombre_completo: string;

  @ApiProperty({
    description: 'La direccion de la persona',
    example: 'AMBATO',
  })
  @IsString()
  direccion: string;

  @ApiProperty({
    description: 'La identificacion de la persona',
    example: '2000156050',
  })
  @IsString()
  identificacion: string;

  @ApiProperty({
    description: 'El número de celular de la persona',
    example: '0987654321',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(10)
  celular?: string;

  @ApiProperty({
    description: 'El número de teléfono de la persona',
    example: '032123456',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(10)
  telefono?: string;

  @ApiProperty({
    description: 'El correo electrónico de la persona',
    example: 'juan.perez@example.com',
  })
  @IsEmail()
  correo_electronico: string;

  @ApiProperty({
    description: 'La fecha de nacimiento de la persona',
    example: '1980-01-01',
  })
  @IsDate()
  //usar clastransform para transformar el tipo de dato String
  @Type(() => Date)
  fecha_nacimiento: Date;

  @ApiProperty({
    description: 'El nombre del tipo de identificación',
    example: 'CEDULA',
  })
  @IsString()
  @MinLength(3)
  nombre_tipoIdentificacion: string;

  @ApiProperty({
    description: 'El ID del usuario asociado a la persona',
    example: 1,
  })
  @IsNumber()
  id_usuario: number;
}
