import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTiposIdentificacioneDto {
  @IsString()
  @ApiProperty({
    description: 'Nombre del tipo de Identificacion',
    example: 2000156050,
  })
  nombre: string;
}
