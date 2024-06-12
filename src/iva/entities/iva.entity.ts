import { Column, Decimal128, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Iva {
  @PrimaryGeneratedColumn()
  id_iva: number;
  @Column({ type: 'decimal', nullable: false })
  valor: Decimal128;
}
