import { Module } from '@nestjs/common';
import { DetalleFacturasService } from './detalle_facturas.service';
import { DetalleFacturasController } from './detalle_facturas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFactura } from './entities/detalle_factura.entity';
import { ProductosModule } from 'src/productos/productos.module';
import { CarritoProductoModule } from 'src/carrito_producto/carrito_producto.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DetalleFactura]),
    ProductosModule,
    CarritoProductoModule,
  ],
  controllers: [DetalleFacturasController],
  providers: [DetalleFacturasService],
  exports: [DetalleFacturasService],
})
export class DetalleFacturasModule {}
