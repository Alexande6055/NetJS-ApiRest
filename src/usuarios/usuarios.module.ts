import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { CarritoCompraModule } from 'src/carrito_compra/carrito_compra.module';
import { DescuentoModule } from 'src/descuento/descuento.module';
import { UsuariosRolesModule } from 'src/usuarios_roles/usuarios_roles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    CarritoCompraModule,
    DescuentoModule,
    UsuariosRolesModule,
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
