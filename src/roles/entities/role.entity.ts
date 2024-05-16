import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  codigo_rol: number;

  @Column({ type: 'varchar', nullable: false })
  persona: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.codigo_usuario)
  @JoinColumn({ name: 'codigo_usuario' })
  codigo_usuario: number;
}
