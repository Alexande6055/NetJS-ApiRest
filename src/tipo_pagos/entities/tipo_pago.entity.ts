import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoPago {
  @PrimaryGeneratedColumn()
  id_pago: number;
  @Column({ type: 'varchar', nullable: false })
  nombrePago: string;
  //crear relacion con una tabla pagos
}
