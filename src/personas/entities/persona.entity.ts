import { TiposIdentificacione } from 'src/tipos_identificaciones/entities/tipos_identificacione.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  JoinColumn,
  OneToOne,
  Entity,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id_persona: number;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  nombre_completo: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', unique: false, length: 21, nullable: false })
  identificacion: string;

  @Column({ type: 'varchar', unique: false, length: 10, nullable: true })
  celular: string;

  @Column({ type: 'varchar', unique: false, length: 10, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  correo_electronico: string;

  @Column({ type: 'date', unique: false })
  fecha_nacimiento: Date;

  @Column({
    type: 'varchar',
    unique: false,
    length: 5,
    nullable: false,
    default: 'ACT',
  })
  estado: string;

  @ManyToOne(
    () => TiposIdentificacione,
    (tiposIdentificacione) => tiposIdentificacione.id_tipo_identidicacion,
  )
  @JoinColumn({ name: 'id_tipo_identificacion' })
  id_tipo_identificacion: number;

  //ELIMINACION LOGICA DEL REGISTRO ALMACENA LA FECHA DE ELIMINACION
  @DeleteDateColumn()
  deleteAt: Date;

  @OneToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  id_usuario: Usuario;
}
