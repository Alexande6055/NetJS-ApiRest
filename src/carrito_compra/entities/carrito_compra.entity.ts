import { CarritoComprasProducto } from 'src/carrito_producto/entities/carrito_producto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carritos_compras')
export class CarritoCompra {
  @PrimaryGeneratedColumn()
  id_carrito_compra: number;

  @OneToMany(
    () => CarritoComprasProducto,
    (carritoProducto) => carritoProducto.id_carrito_compra,
  )
  carritoProductos: CarritoComprasProducto[];

  @Column({ type: 'integer', nullable: false, default: 0 })
  cantidad: number;
}
