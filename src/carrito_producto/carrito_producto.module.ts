import { Module } from '@nestjs/common';
import { CarritoProductoService } from './carrito_producto.service';
import { CarritoProductoController } from './carrito_producto.controller';
import { CarritoProducto } from './entities/carrito_producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CarritoProducto])],
  controllers: [CarritoProductoController],
  providers: [CarritoProductoService],
})
export class CarritoProductoModule {}
