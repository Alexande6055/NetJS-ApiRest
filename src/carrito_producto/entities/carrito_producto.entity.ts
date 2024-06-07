import { CarritoCompra } from 'src/carrito_compra/entities/carrito_compra.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carrito_compras_productos')
export class CarritoComprasProducto {
  @PrimaryGeneratedColumn()
  id_carrito_producto: number;
  @ManyToOne(
    () => CarritoCompra,
    (carrito_compra) => carrito_compra.id_carrito_compra,
    { eager: true },
  )
  @JoinColumn({ name: 'id_carrito_compra' })
  id_carrito_compra: number;

  @ManyToOne(() => Producto, (producto) => producto.id_producto, {
    eager: true,
  })
  @JoinColumn({ name: 'id_producto' })
  id_producto: Producto;
}
