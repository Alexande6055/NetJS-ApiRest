import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  codigo_detalle_factura: number;
  @Column({ type: 'decimal', nullable: true, precision: 10, scale: 4 })
  precio: number;
  @Column({ type: 'decimal', nullable: true, precision: 3 })
  cantidad: number;
  @Column({ type: 'decimal', nullable: false, precision: 9, scale: 4 })
  total: number;
}
