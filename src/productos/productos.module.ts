import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { MarcaModule } from 'src/marca/marca.module';
import { CategoriasModule } from 'src/categorias/categorias.module';
import { PromocionModule } from 'src/promocion/promocion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto]),
    MarcaModule,
    CategoriasModule,
    PromocionModule,
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {}
