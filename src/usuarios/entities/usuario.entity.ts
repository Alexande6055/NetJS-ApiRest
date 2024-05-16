import { Persona } from 'src/personas/entities/persona.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  codigo_usuario: number;
  @OneToOne(() => Persona)
  @JoinColumn({ name: 'codigo_persona' })
  persona: Persona;
  @Column({ type: 'varchar', nullable: false })
  correo: string;
  @Column({ type: 'varchar', nullable: false })
  password: string;
}
