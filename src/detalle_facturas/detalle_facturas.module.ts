import { Module } from '@nestjs/common';
import { DetalleFacturasService } from './detalle_facturas.service';
import { DetalleFacturasController } from './detalle_facturas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFactura } from './entities/detalle_factura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleFactura])],
  controllers: [DetalleFacturasController],
  providers: [DetalleFacturasService],
})
export class DetalleFacturasModule {}
