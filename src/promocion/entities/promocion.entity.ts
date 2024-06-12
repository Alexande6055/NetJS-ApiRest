import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Promociones')
export class Promocion {
  @PrimaryGeneratedColumn()
  id_procion: number;
  @Column({ type: 'varchar', nullable: false })
  descripcion: string;
  @Column({ type: 'numeric', precision: 5, scale: 2, nullable: false })
  valor: number;
  @Column({ type: 'date', nullable: false })
  fecha_inicio: Date;
  @Column({ type: 'date', nullable: false })
  fecha_fin: Date;
}
