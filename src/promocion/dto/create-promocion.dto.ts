import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'Descuento de verano',
    description: 'Descripción de la promoción',
  })
  descripcion: string;

  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty({ example: 10.5, description: 'Descuento en porcentaje' })
  descuento: number;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    example: '2024-06-20',
    description: 'Fecha de inicio de la promoción',
  })
  fecha_inicio: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    example: '2024-07-31',
    description: 'Fecha de fin de la promoción',
  })
  fecha_fin: string;
}
