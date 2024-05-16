import { Module } from '@nestjs/common';
import { StockProductosService } from './stock_productos.service';
import { StockProductosController } from './stock_productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockProducto } from './entities/stock_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockProducto])],
  controllers: [StockProductosController],
  providers: [StockProductosService],
})
export class StockProductosModule {}
