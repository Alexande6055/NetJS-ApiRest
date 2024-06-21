import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'ID único del rol' })
  id_rol: number;

  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ example: 'Admin', description: 'Nombre del rol' })
  nombre: string;

  @DeleteDateColumn({ name: 'deleted_at' }) // Columna para la fecha de eliminación suave
  @ApiProperty({
    example: '2024-06-20T12:00:00Z',
    description: 'Fecha de eliminación suave del rol (opcional)',
  })
  deletedAt: Date;
}
