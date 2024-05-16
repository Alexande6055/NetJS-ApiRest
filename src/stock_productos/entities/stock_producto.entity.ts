import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StockProducto {
  @PrimaryGeneratedColumn()
  codigo_StockProducto: number;

  @Column({ type: 'numeric', nullable: false })
  cantidad: number;
  @OneToOne(() => Producto)
  @JoinColumn({ name: 'codigo_producto' })
  producto: Producto;
}
