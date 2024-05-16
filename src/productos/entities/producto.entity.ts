import { DetalleFactura } from 'src/detalle_facturas/entities/detalle_factura.entity';
import { Iva } from 'src/iva/entities/iva.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  codigo_producto: number;
  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @ManyToOne(() => DetalleFactura)
  @JoinColumn({ name: 'codigo_detalle_factura' })
  detalleFactura: DetalleFactura;
  @ManyToOne(() => Iva)
  @JoinColumn({ name: 'codigo_iva' })
  iva: Iva;
}
