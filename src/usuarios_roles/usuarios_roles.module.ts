import { Module } from '@nestjs/common';
import { UsuariosRolesService } from './usuarios_roles.service';
import { UsuariosRolesController } from './usuarios_roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosRole } from './entities/usuarios_role.entity';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosRole]), RolesModule],
  controllers: [UsuariosRolesController],
  providers: [UsuariosRolesService],
  exports: [UsuariosRolesService],
})
export class UsuariosRolesModule {}
