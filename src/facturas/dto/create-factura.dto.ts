import { IsDate, IsNumber } from 'class-validator';

export class CreateFacturaDto {
  @IsNumber()
  persona: number;
  @IsNumber()
  tipoPago: number;
  @IsNumber()
  totalFactura: number;
}
