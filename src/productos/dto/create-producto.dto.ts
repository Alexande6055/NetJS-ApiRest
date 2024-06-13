import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  IsDecimal,
  IsNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  nombre: string;
  @IsString()
  @Transform(({ value }) => value.trim())
  descripcion: string;
  @IsString()
  @Optional()
  @MinLength(8)
  imgUrl?: string;
  @IsNumber()
  precio: number;
  @IsString()
  nombre_categoria: string;
  @IsString()
  nombre_marca: string;
  @IsString()
  descripcion_promocion: string;
}
