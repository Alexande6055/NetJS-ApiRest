import { Categoria } from 'src/categorias/entities/categoria.entity';
import { DetalleFactura } from 'src/detalle_facturas/entities/detalle_factura.entity';
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
  @Column({ type: 'int', default: 0 })
  stock: number;
  @ManyToOne(() => Iva)
  @JoinColumn({ name: 'id_iva' })
  iva: Iva;
  @Column({ type: 'decimal', nullable: true, precision: 10, scale: 4 })
  precio: number;
  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  id_categoria: Categoria;
  @ManyToOne(() => Marca)
  @JoinColumn({ name: 'id_marca' })
  id_marca: Marca;
  @ManyToOne(() => Promocion, { nullable: true })
  @JoinColumn({ name: 'id_promocion' })
  id_promocion: Promocion;
  @DeleteDateColumn({ name: 'deleted_at' }) // Columna para la fecha de eliminación suave
  deletedAt: Date;
}
