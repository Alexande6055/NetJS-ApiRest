import { IsNumber, IsString } from 'class-validator';

export class CreateCarritoProductoDto {
  @IsNumber()
  id_carrito_compra: number;
  @IsNumber()
  id_producto: number;
}
