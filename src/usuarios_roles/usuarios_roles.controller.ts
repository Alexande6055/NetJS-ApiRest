import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosRolesService } from './usuarios_roles.service';
import { CreateUsuariosRoleDto } from './dto/create-usuarios_role.dto';
import { UpdateUsuariosRoleDto } from './dto/update-usuarios_role.dto';

@Controller('usuarios-roles')
export class UsuariosRolesController {
  constructor(private readonly usuariosRolesService: UsuariosRolesService) {}

  @Post()
  create(@Body() createUsuariosRoleDto: CreateUsuariosRoleDto) {
    return this.usuariosRolesService.create(createUsuariosRoleDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuariosRolesService.findOne(id);
  }

  @Get('obtenerroles/:id')
  ObtenerRoles(@Param('id') id: number) {
    return this.usuariosRolesService.findAllRols(id);
  }

  @Post('actualizarroles/:id')
  async actualizarRoles(
    @Param('id') id: number,
    @Body() body: { roleIds: number[] },
  ) {
    return this.usuariosRolesService.actualizarRoles(id, body.roleIds);
  }
}
