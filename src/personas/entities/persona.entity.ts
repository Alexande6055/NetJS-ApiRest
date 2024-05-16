import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  codigo_persona: number;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  nombre_completo: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', unique: false, length: 13, nullable: false })
  ruc_Ci: string;

  @Column({ type: 'varchar', unique: false, length: 10, nullable: true })
  celular: string;

  @Column({ type: 'varchar', unique: false, length: 10, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  correo_electronico: string;
}
