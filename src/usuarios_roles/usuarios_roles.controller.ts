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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthController } from 'src/auth/auth.controller';

@ApiTags('usuarios-roles')
@Controller('usuarios-roles')
export class UsuariosRolesController {
  constructor(private readonly usuariosRolesService: UsuariosRolesService) {}

  @Post()
  create(@Body() createUsuariosRoleDto: CreateUsuariosRoleDto) {
    return this.usuariosRolesService.create(createUsuariosRoleDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una relación usuario-rol por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación usuario-rol' })
  @ApiOperation({ summary: 'Crear una nueva relación usuario-rol' })
  @ApiBody({ type: CreateUsuariosRoleDto })
  findOne(@Param('id') id: number) {
    return this.usuariosRolesService.findOne(id);
  }

  @Get('obtenerroles/:id')
  @ApiOperation({ summary: 'Obtener todos los roles de un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario' })
  ObtenerRoles(@Param('id') id: number) {
    return this.usuariosRolesService.findAllRols(id);
  }

  @Post('actualizarroles/:id')
  @ApiOperation({ summary: 'Actualizar los roles de un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario' })
  @ApiBody({
    description: 'IDs de los roles a asignar',
    schema: { example: { roleIds: [1, 2, 3] } },
  })
  async actualizarRoles(
    @Param('id') id: number,
    @Body() body: { roleIds: number[] },
  ) {
    return this.usuariosRolesService.actualizarRoles(id, body.roleIds);
  }
}
