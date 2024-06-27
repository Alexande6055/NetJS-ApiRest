import { DetalleFactura } from 'src/detalle_facturas/entities/detalle_factura.entity';
import { Persona } from 'src/personas/entities/persona.entity';
import { TipoPago } from 'src/tipo_pagos/entities/tipo_pago.entity';
import {
  Column,
  DeleteDateColumn,
  Double,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('facturas')
export class Factura {
  @PrimaryGeneratedColumn()
  id_factura: number;
  codigo_factura: 'f000';
  @Column({ type: 'date', nullable: false })
  fecha: Date;
  @ManyToOne(() => Persona)
  @JoinColumn({ name: 'id_persona' })
  persona: number;
  @ManyToOne(() => TipoPago)
  @JoinColumn({ name: 'id_pago' })
  tipoPago: number;
  @Column({
    type: 'decimal',
    nullable: false,
    default: 0,
    precision: 10,
    scale: 4,
  })
  totalFactura: number;
  @OneToMany(() => DetalleFactura, (detalle) => detalle.id_factura, {
    eager: true,
  })
  detallefac: DetalleFactura[];
  @Column({ name: 'estado', default: 'ACT' })
  estado: string;
}
