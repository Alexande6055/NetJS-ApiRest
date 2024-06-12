import { Factura } from 'src/facturas/entities/factura.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Devoluciones')
export class Devolucion {
  @PrimaryGeneratedColumn()
  id_devolucion: number;
  @Column({ type: 'timestamp', nullable: false })
  fecha: Date;
  @Column({ type: 'varchar', nullable: false })
  motivo: string;
  @Column({ type: 'numeric', nullable: false })
  cantidad_Productos: number;
  @OneToOne(() => Factura)
  @JoinColumn({ name: 'id_factura' })
  id_factura: Factura;
}
