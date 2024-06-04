import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;
}
