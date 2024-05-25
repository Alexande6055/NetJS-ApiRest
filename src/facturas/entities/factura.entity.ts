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
  id_factura: number;
  @Column({ type: 'date', nullable: false })
  fecha: Date;
  @OneToOne(() => DetalleFactura)
  @JoinColumn({ name: 'id_detalle_factura' })
  detalleFactura: DetalleFactura;
  @OneToOne(() => Persona)
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;
  @OneToOne(() => TipoPago)
  @JoinColumn({ name: 'id_pago' })
  tipoPago: TipoPago;
  @Column({ type: 'decimal', nullable: false, precision: 10, scale: 4 })
  totalFactura: Double;
  //insertar relacion al id sucursal
}
