import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  codigo_categoria: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @ManyToOne(() => Producto, (producto) => producto.codigo_producto)
  @JoinColumn({ name: 'codigo_producto' })
  codigo_producto: number;
}
