import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('Marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único de la marca' })
  id_marca: number;
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ description: 'Nombre de la marca' })
  nombre: string;
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ description: 'Descripción de la marca' })
  descripcion: string;
  @DeleteDateColumn({ name: 'deleted_at' }) // Columna para la fecha de eliminación suave
  @ApiProperty({ description: 'fecha de eliminado de la marca' })
  deletedAt: Date;
}
