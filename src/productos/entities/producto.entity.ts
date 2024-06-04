import { Categoria } from 'src/categorias/entities/categoria.entity';
import { DetalleFactura } from 'src/detalle_facturas/entities/detalle_factura.entity';
import { Iva } from 'src/iva/entities/iva.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;
  @Column({ type: 'varchar', nullable: false })
  nombre: string;
  @Column({ type: 'varchar', nullable: false })
  descripcion: string;
  @Column({ type: 'varchar', nullable: true })
  imgUrl: string;
  @ManyToOne(() => DetalleFactura)
  @JoinColumn({ name: 'id_detalle_factura' })
  detalleFactura: DetalleFactura;
  @ManyToOne(() => Iva)
  @JoinColumn({ name: 'id_iva' })
  iva: Iva;
  @Column({ type: 'decimal', nullable: true, precision: 10, scale: 4 })
  precio: number;
  @DeleteDateColumn()
  deletAt: Date;
  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  id_categoria: Categoria;
}
