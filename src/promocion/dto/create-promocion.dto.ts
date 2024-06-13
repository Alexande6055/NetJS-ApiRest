import {
  IsString,
  IsNotEmpty,
  IsDecimal,
  IsDateString,
  IsDate,
} from 'class-validator';

export class CreatePromocionDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsDecimal()
  @IsNotEmpty()
  descuento: number;

  @IsDate()
  @IsNotEmpty()
  fecha_inicio: string;

  @IsDate()
  @IsNotEmpty()
  fecha_fin: string;
}
