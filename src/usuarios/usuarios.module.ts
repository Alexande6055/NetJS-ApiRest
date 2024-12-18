import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { CarritoCompraModule } from 'src/carrito_compra/carrito_compra.module';
import { DescuentoModule } from 'src/descuento/descuento.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    CarritoCompraModule,
    DescuentoModule,
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
