import { IsDate, IsDecimal } from 'class-validator';
import { Decimal128 } from 'typeorm';

export class CreatePromocionDto {
  descripcion: string;
  @IsDecimal()
  valor: Decimal128;
  @IsDate()
  fecha_inicio: Date;
  @IsDate()
  fecha_fin: Date;
}
