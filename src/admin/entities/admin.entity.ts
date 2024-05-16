import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  codigo_admin: number;
  @Column({ type: 'varchar', nullable: false })
  user: string;
  @Column({ type: 'varchar', nullable: false })
  contrasenia: string;
}
