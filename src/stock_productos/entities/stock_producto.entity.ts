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
  id_StockProducto: number;

  @Column({ type: 'numeric', nullable: false })
  cantidad: number;
  @OneToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto;
}
