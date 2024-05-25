import { Role } from 'src/roles/entities/role.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuariosRole {
  @PrimaryGeneratedColumn()
  id_usuario_rol: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.id_usuario)
  @JoinColumn({ name: 'id_usuario' })
  id_usuario: number;

  @ManyToOne(() => Role, (role) => role.id_rol)
  @JoinColumn({ name: 'id_rol' })
  id_rol: number;
}
//1:32:00
