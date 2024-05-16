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
  codigo_credito: number;
  @OneToOne(() => Factura)
  @JoinColumn({ name: 'codigo_factura' })
  factura: Factura;
  total: number;
  @ManyToOne(() => Cliente, (cliente) => cliente.codigo_cliente)
  @JoinColumn({ name: 'codigo_cliente' })
  codigo_cliente: number;
}
