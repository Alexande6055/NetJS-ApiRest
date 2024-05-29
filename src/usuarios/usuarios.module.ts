import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { PersonasModule } from 'src/personas/personas.module';
import { PersonasService } from 'src/personas/personas.service';
import { CarritoCompraModule } from 'src/carrito_compra/carrito_compra.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), CarritoCompraModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
