import { Factura } from 'src/facturas/entities/factura.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Devoluiones')
export class Devolucion {
  @PrimaryGeneratedColumn()
  id_devolucion: number;
  @Column({ type: 'varchar', nullable: false })
  motivo: string;
  @Column({ type: 'timestamp', nullable: false })
  fecha: Date;
  @ManyToOne(() => Factura)
  id_factura: Factura;
}
