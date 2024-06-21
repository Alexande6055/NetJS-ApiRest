import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMarcaDto {
  @IsString()
  @ApiProperty({ description: 'Nombre de la marca' })
  nombre: string;
  @IsString()
  @ApiProperty({ description: 'Descripción de la marca' })
  descripcion: string;
}
