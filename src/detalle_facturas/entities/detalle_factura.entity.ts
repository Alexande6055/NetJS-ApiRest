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
  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  id_producto: number;
  @Column({ type: 'decimal', nullable: true, precision: 3 })
  cantidad: number;
  @Column({ type: 'decimal', nullable: false, precision: 9, scale: 4 })
  total: number;

  calcularTotal(precio: number, cantidad: number) {
    this.total = precio * cantidad;
  }
}
