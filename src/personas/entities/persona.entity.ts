import { ApiProperty } from '@nestjs/swagger';
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

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único de la persona' })
  id_persona: number;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  @ApiProperty({ description: 'Nombre completo de la persona' })
  nombre_completo: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  @ApiProperty({ description: 'Dirección de la persona' })
  direccion: string;

  @Column({ type: 'varchar', unique: false, length: 21, nullable: false })
  @ApiProperty({ description: 'Identificación de la persona' })
  identificacion: string;

  @Column({ type: 'varchar', unique: false, length: 10, nullable: true })
  @ApiProperty({
    description: 'Número de celular de la persona',
    required: false,
  })
  celular: string;

  @Column({ type: 'varchar', unique: false, length: 10, nullable: true })
  @ApiProperty({
    description: 'Número de teléfono de la persona',
    required: false,
  })
  telefono: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  @ApiProperty({ description: 'Correo electrónico de la persona' })
  correo_electronico: string;

  @Column({ type: 'date', unique: false })
  @ApiProperty({ description: 'Fecha de nacimiento de la persona' })
  fecha_nacimiento: Date;

  @Column({
    type: 'varchar',
    unique: false,
    length: 5,
    nullable: false,
    default: 'ACT',
  })
  @ApiProperty({ description: 'Estado de la persona' })
  estado: string;

  @ManyToOne(
    () => TiposIdentificacione,
    (tiposIdentificacione) => tiposIdentificacione.id_tipo_identidicacion,
  )
  @JoinColumn({ name: 'id_tipo_identificacion' })
  @ApiProperty({ description: 'Tipo de identificación de la persona' })
  id_tipo_identificacion: number;

  //ELIMINACION LOGICA DEL REGISTRO ALMACENA LA FECHA DE ELIMINACION
  @DeleteDateColumn()
  @ApiProperty({
    description: 'Fecha de eliminación de la persona (eliminación lógica)',
  })
  deleteAt: Date;

  @OneToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  @ApiProperty({ description: 'Usuario asociado a la persona (opcional)' })
  id_usuario: Usuario;
}
