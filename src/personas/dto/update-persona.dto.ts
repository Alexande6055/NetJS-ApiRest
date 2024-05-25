import { IsString, MinLength, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePersonaDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  nombre_completo?: string;

  @IsString()
  @IsOptional()
  direccion?: string;

  @IsString()
  @IsOptional()
  identificacion?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  celular?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  telefono?: string;

  @IsString()
  @IsOptional()
  correo_electronico?: string;

  @IsDate()
  //usar clastransform para transformar el tipo de dato String
  @Type(() => Date)
  @IsOptional()
  fecha_nacimiento?: Date;

  @IsString()
  @IsOptional()
  estado?: string;
}
