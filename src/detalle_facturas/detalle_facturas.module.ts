import { Module } from '@nestjs/common';
import { DetalleFacturasService } from './detalle_facturas.service';
import { DetalleFacturasController } from './detalle_facturas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFactura } from './entities/detalle_factura.entity';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleFactura]), ProductosModule],
  controllers: [DetalleFacturasController],
  providers: [DetalleFacturasService],
})
export class DetalleFacturasModule {}
