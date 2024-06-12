import { IsDecimal, IsOptional, IsString, MinLength } from 'class-validator';
import { Decimal128 } from 'typeorm';

export class CreateUsuarioDto {
  @IsString()
  password: string;
  @IsString()
  username: string;
  @IsOptional()
  @IsDecimal()
  id_descuento: Decimal128;
}
