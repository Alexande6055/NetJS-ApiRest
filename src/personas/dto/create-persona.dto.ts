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
  @IsString()
  @MinLength(3)
  nombre_completo: string;

  @IsString()
  direccion: string;

  @IsString()
  identificacion: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  celular?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  telefono?: string;

  @IsEmail()
  correo_electronico: string;

  @IsDate()
  //usar clastransform para transformar el tipo de dato String
  @Type(() => Date)
  fecha_nacimiento: Date;

  @IsString()
  @MinLength(3)
  nombre_tipoIdentificacion: string;
}
