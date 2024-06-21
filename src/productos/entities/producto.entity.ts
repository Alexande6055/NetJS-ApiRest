import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ description: 'ID único del producto' })
  id_producto: number;
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ description: 'Nombre del producto' })
  nombre: string;
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ description: 'Descripción del producto' })
  descripcion: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ description: 'URL de la imagen del producto' })
  imgUrl: string;
  @Column({ type: 'int', default: 0 })
  @ApiProperty({ description: 'Cantidad en stock del producto' })
  stock: number;
  @ManyToOne(() => Iva)
  @JoinColumn({ name: 'id_iva' })
  @ApiProperty({ description: 'Objeto IVA aplicado al producto' })
  iva: Iva;
  @Column({ type: 'decimal', nullable: true, precision: 10, scale: 4 })
  @ApiProperty({ description: 'Precio del producto' })
  precio: number;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  @ApiProperty({ description: 'Objeto categoría del producto' })
  id_categoria: Categoria;
  @ManyToOne(() => Marca)
  @JoinColumn({ name: 'id_marca' })
  @ApiProperty({ description: 'Objeto marca del producto' })
  id_marca: Marca;
  @ManyToOne(() => Promocion, { nullable: true })
  @JoinColumn({ name: 'id_promocion' })
  @ApiProperty({
    description: 'Objeto promoción aplicada al producto (opcional)',
  })
  id_promocion: Promocion;
  @DeleteDateColumn({ name: 'deleted_at' }) // Columna para la fecha de eliminación suave
  @ApiProperty({
    description: 'Fecha de eliminación del producto (eliminación suave)',
  })
  deletedAt: Date;
}
