import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class TiposIdentificacione {
  @PrimaryGeneratedColumn()
  id_tipo_identidicacion: number;
  @Column({ type: 'varchar', unique: false, length: 30, nullable: false })
  nombre: string;
  @DeleteDateColumn()
  estado: Date;
}
