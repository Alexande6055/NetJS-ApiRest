import { Persona } from 'src/personas/entities/persona.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  codigo_cliente: number;
  @OneToOne(() => Role)
  @JoinColumn({ name: 'codigo_persona' })
  role: Role;
}
