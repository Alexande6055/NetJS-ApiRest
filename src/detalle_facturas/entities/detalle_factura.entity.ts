import { Factura } from 'src/facturas/entities/factura.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('detalle_facturas')
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  id_detalle_factura: number;
  @ManyToOne(() => Factura)
  @JoinColumn({ name: 'id_factura' })
  id_factura: number;
  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  id_producto: number;
  @Column({ type: 'decimal', nullable: true, precision: 3 })
  cantidad: number;
  @Column({
    type: 'decimal',
    nullable: false,
    default: 0,
    precision: 9,
    scale: 4,
  })
  precio_unitario: number;
  @Column({
    type: 'decimal',
    nullable: false,
    default: 0,
    precision: 9,
    scale: 4,
  })
  subtotal: number;

  calcularTotal(cantidad: number) {
    this.subtotal = this.precio_unitario * cantidad;
  }
}
