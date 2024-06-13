import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { MarcaModule } from 'src/marca/marca.module';

@Module({
  imports: [TypeOrmModule.forFeature([Producto]), MarcaModule, CategoriaModule],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {}
