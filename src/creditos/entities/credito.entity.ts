import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Factura } from 'src/facturas/entities/factura.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Credito {
  @PrimaryGeneratedColumn()
  id_credito: number;
  @OneToOne(() => Factura)
  @JoinColumn({ name: 'id_factura' })
  factura: Factura;
  total: number;
  @ManyToOne(() => Cliente, (cliente) => cliente.id_cliente)
  @JoinColumn({ name: 'id_cliente' })
  id_cliente: number;
}
