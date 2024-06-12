import { IsDecimal } from 'class-validator';
import { Decimal128 } from 'typeorm';

export class CreateIvaDto {
  @IsDecimal()
  valor: Decimal128;
}
