import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Descuento {
  @PrimaryGeneratedColumn()
  id_descuento: number;
  @ManyToOne(() => Producto, (producto) => producto.id_producto, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'id_producto' })
  id_producto: number;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  porcentaje: number;
  @Column({ type: 'date', nullable: false })
  fecha_inicio: Date;
  @Column({ type: 'date', nullable: false })
  fecha_fin: Date;
}
