import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ description: 'Nombre del producto' })
  nombre: string;
  @IsString()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ description: 'Descripción del producto' })
  descripcion: string;
  @IsString()
  @Optional()
  @MinLength(8)
  @ApiProperty({
    description: 'URL de la imagen del producto',
    required: false,
  })
  imgUrl?: string;
  @IsNumber()
  @ApiProperty({ description: 'Precio del producto' })
  precio: number;
  @IsString()
  @ApiProperty({ description: 'Nombre de la categoría del producto' })
  nombre_categoria: string;
  @IsString()
  @ApiProperty({ description: 'Nombre de la marca del producto' })
  nombre_marca: string;
  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'ID de la promoción aplicada al producto',
    required: false,
  })
  id_promocion?: number;
  @IsNumber()
  @ApiProperty({
    description: 'cantidad del producto en stock',
    required: false,
  })
  stock: number;
  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Id del iva',
    required: false,
  })
  iva?: number;
}
