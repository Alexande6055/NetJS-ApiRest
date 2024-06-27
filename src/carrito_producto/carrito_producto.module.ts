import { Module } from '@nestjs/common';
import { CarritoProductoService } from './carrito_producto.service';
import { CarritoProductoController } from './carrito_producto.controller';
import { CarritoComprasProducto } from './entities/carrito_producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from 'src/productos/productos.module';
import { CarritoCompraModule } from 'src/carrito_compra/carrito_compra.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarritoComprasProducto]),
    ProductosModule,
    CarritoCompraModule,
  ],
  controllers: [CarritoProductoController],
  providers: [CarritoProductoService],
  exports: [CarritoProductoService],
})
export class CarritoProductoModule {}
