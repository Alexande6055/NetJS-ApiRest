import { Factura } from 'src/facturas/entities/factura.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('detalle_facturas')
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  id_detalle_factura: number;
  @Column({ type: 'decimal', nullable: true, precision: 3 })
  cantidad: number;
  @Column({ type: 'decimal', nullable: false, precision: 9, scale: 4 })
  total: number;
  @ManyToOne(() => Producto, (producto) => producto.id_producto)
  producto: number;
  @ManyToOne(() => Factura, (factura) => factura.id_factura)
  factura: number;
}
