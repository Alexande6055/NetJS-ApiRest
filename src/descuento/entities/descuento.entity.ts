import {
  Column,
  Decimal128,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Descuentos')
export class Descuento {
  @PrimaryGeneratedColumn()
  id_descuento: number;
  @Column({ type: 'decimal', nullable: true })
  valor_descuento: number;
  @DeleteDateColumn()
  deletAt: Date;
  @Column({ type: 'varchar', nullable: false, default: 'ACTIVO' })
  estado: string;
  @Column({ type: 'varchar', nullable: false })
  descripcion: string;
}
