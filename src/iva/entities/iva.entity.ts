import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Iva {
  @PrimaryGeneratedColumn()
  codigo_iva: number;
  @Column({ type: 'integer', nullable: false })
  valor: number;
}
