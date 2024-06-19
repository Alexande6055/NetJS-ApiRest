import { Module } from '@nestjs/common';
import { UsuariosRolesService } from './usuarios_roles.service';
import { UsuariosRolesController } from './usuarios_roles.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosRole } from './entities/usuarios_role.entity';
import { RolesModule } from 'src/roles/roles.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuariosRole]),
    RolesModule,
    UsuariosModule,
  ],
  controllers: [UsuariosRolesController],
  providers: [UsuariosRolesService],
})
export class UsuariosRolesModule {}
