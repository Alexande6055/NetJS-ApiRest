import { IsNumber } from 'class-validator';

export class CreateDetalleFacturaDto {
  @IsNumber()
  id_producto: number;
  @IsNumber()
  cantidad: number;
}
