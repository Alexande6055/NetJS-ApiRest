import { IsDate, IsString } from 'class-validator';
import { Factura } from 'src/facturas/entities/factura.entity';
import { ManyToOne } from 'typeorm';

export class CreateDevolucionDto {
  @IsString()
  motivo: string;
  @IsDate()
  fecha: Date;
  @ManyToOne(() => Factura)
  id_factura: Factura;
}
