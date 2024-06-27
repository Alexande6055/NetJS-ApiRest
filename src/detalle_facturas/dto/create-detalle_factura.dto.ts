import { IsNumber } from 'class-validator';

export class CreateDetalleFacturaDto {
  @IsNumber()
  id_producto: number;
  @IsNumber()
  id_factura: number;
  @IsNumber()
  cantidad: number;
}
