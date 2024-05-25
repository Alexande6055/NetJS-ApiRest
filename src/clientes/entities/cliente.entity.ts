import { Persona } from 'src/personas/entities/persona.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number;
  @OneToOne(() => Role)
  @JoinColumn({ name: 'id_persona' })
  role: Role;
}
