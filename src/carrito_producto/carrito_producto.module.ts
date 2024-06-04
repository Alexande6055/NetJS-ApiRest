import { Module } from '@nestjs/common';
import { CarritoProductoService } from './carrito_producto.service';
import { CarritoProductoController } from './carrito_producto.controller';
import { CarritoProducto } from './entities/carrito_producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports: [TypeOrmModule.forFeature([CarritoProducto]), ProductosModule],
  controllers: [CarritoProductoController],
  providers: [CarritoProductoService],
})
export class CarritoProductoModule {}
