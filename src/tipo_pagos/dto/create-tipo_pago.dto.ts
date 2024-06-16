import { IsString } from 'class-validator';

export class CreateTipoPagoDto {
  @IsString()
  nombrePago: string;
}
