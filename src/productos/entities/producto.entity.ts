import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Iva } from 'src/iva/entities/iva.entity';
import { Marca } from 'src/marca/entities/marca.entity';
import { Promocion } from 'src/promocion/entities/promocion.entity';
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
  @Column({ type: 'number', nullable: false, default: 0 })
  stock: number;
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
  @ManyToOne(() => Marca, (marca) => marca.id_Marca)
  @JoinColumn({ name: 'id_marca' })
  id_marca: number;
  @ManyToOne(() => Promocion, (promocion) => promocion.id_procion)
  @JoinColumn({ name: 'id_promocion' })
  id_promocion: number;
}
