import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tipo_pagos')
export class TipoPago {
  @PrimaryGeneratedColumn()
  id_pago: number;
  @Column({ type: 'varchar', nullable: false })
  nombrePago: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
