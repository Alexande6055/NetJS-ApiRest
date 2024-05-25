import { Module } from '@nestjs/common';
import { UsuariosRolesService } from './usuarios_roles.service';
import { UsuariosRolesController } from './usuarios_roles.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosRole } from './entities/usuarios_role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosRole])],
  controllers: [UsuariosRolesController],
  providers: [UsuariosRolesService],
})
export class UsuariosRolesModule {}
