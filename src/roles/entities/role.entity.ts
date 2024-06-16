import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;
  @DeleteDateColumn({ name: 'deleted_at' }) // Columna para la fecha de eliminación suave
  deletedAt: Date;
}
