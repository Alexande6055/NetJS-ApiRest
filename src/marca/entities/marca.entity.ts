import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  id_marca: number;
  @Column({ type: 'varchar', nullable: false })
  nombre: string;
  @Column({ type: 'varchar', nullable: false })
  descripcion: string;
  @DeleteDateColumn({ name: 'deleted_at' }) // Columna para la fecha de eliminación suave
  deletedAt: Date;
}
