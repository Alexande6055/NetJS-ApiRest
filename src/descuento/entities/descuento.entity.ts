import {
  Column,
  Decimal128,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Descuento {
  @PrimaryGeneratedColumn()
  id_descuento: number;
  @JoinColumn({ name: 'id_producto' })
  id_producto: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  porcentaje: Decimal128;
  @Column({ type: 'date', nullable: false })
  fecha_inicio: Date;
  @Column({ type: 'date', nullable: false })
  fecha_fin: Date;
}
