import {
  IsString,
  IsNotEmpty,
  IsDecimal,
  IsDateString,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreatePromocionDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsDecimal()
  @IsNotEmpty()
  descuento: number;

  @IsDateString()
  @IsNotEmpty()
  fecha_inicio: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_fin: string;
}
