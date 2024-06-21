import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ApiTags('promociones') // Etiqueta para la entidad Promocion
@Entity('promociones')
export class Promocion {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único de la promocion' })
  id_promocion: number;

  @Column({ length: 255 })
  @ApiProperty({
    description: 'Descripción de la promoción',
    example: 'Descuento de verano',
  })
  descripcion: string;

  @Column('decimal', { precision: 5, scale: 2 })
  @ApiProperty({
    description: 'Descuento de la promoción',
    example: 10.5,
  })
  descuento: number;

  @Column('date')
  @ApiProperty({
    description: 'Fecha de inicio de la promoción',
    example: '2024-07-01',
  })
  fecha_inicio: Date;

  @Column('date')
  @ApiProperty({
    description: 'Fecha de fin de la promoción',
    example: '2024-07-31',
  })
  fecha_fin: Date;
}
