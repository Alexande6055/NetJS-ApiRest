import { IsDate, IsDecimal, IsString } from 'class-validator';
import { Decimal128 } from 'typeorm';

export class CreateDescuentoDto {
  @IsDecimal()
  valor_descuento: number;
  @IsDate()
  deletAt: Date;
  @IsString()
  descripcion: string;
}
