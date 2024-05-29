import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('detalle_facturas')
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  id_detalle_factura: number;
  @Column({ type: 'decimal', nullable: true, precision: 3 })
  cantidad: number;
  @Column({ type: 'decimal', nullable: false, precision: 9, scale: 4 })
  total: number;
}
