import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @ManyToOne(() => Producto, (producto) => producto.id_producto)
  @JoinColumn({ name: 'id_producto' })
  id_producto: number;
}
