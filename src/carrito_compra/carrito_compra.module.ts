import { Module } from '@nestjs/common';
import { CarritoCompraService } from './carrito_compra.service';
import { CarritoCompraController } from './carrito_compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoCompra } from './entities/carrito_compra.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([CarritoCompra])],
  controllers: [CarritoCompraController],
  providers: [CarritoCompraService],
  exports: [CarritoCompraService],
})
export class CarritoCompraModule {}
