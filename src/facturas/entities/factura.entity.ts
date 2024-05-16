import { DetalleFactura } from 'src/detalle_facturas/entities/detalle_factura.entity';
import { Persona } from 'src/personas/entities/persona.entity';
import { TipoPago } from 'src/tipo_pagos/entities/tipo_pago.entity';
import {
  Column,
  Double,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Factura {
  @PrimaryGeneratedColumn()
  codigo_factura: number;
  @Column({ type: 'date', nullable: false })
  fecha: Date;
  @OneToOne(() => DetalleFactura)
  @JoinColumn({ name: 'codigo_detalle_factura' })
  detalleFactura: DetalleFactura;
  @OneToOne(() => Persona)
  @JoinColumn({ name: 'codigo_persona' })
  persona: Persona;
  @OneToOne(() => TipoPago)
  @JoinColumn({ name: 'codigo_pago' })
  tipoPago: TipoPago;
  @Column({ type: 'decimal', nullable: false, precision: 10, scale: 4 })
  totalFactura: Double;
  //insertar relacion al codigo sucursal
}
