import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('promociones')
export class Promocion {
  @PrimaryGeneratedColumn()
  id_promocion: number;

  @Column({ length: 255 })
  descripcion: string;

  @Column('decimal', { precision: 5, scale: 2 })
  descuento: number;

  @Column('date')
  fecha_inicio: Date;

  @Column('date')
  fecha_fin: Date;
}
