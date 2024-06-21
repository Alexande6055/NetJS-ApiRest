import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCarritoProductoDto {
  @ApiProperty({ description: 'ID del carrito de compra', example: 1 })
  @IsNumber()
  id_carrito_compra: number;
  @ApiProperty({ description: 'ID del producto', example: 1 })
  @IsNumber()
  id_producto: number;
}
