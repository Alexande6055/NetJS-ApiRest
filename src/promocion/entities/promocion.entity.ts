import { Column, Decimal128, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Promociones')
export class Promocion {
  @PrimaryGeneratedColumn()
  id_procion: number;
  @Column({ type: 'varchar', nullable: false })
  descripcion: string;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  valor: Decimal128;
  @Column({ type: 'date', nullable: false })
  fecha_inicio: Date;
  @Column({ type: 'date', nullable: false })
  fecha_fin: Date;
}
