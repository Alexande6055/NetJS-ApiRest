import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';
import { UsuariosRolesService } from 'src/usuarios_roles/usuarios_roles.service';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly usuarioRolService: UsuariosRolesService,
  ) {}

  @Post()
  @Auth([Role.CONTADOR, Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiBody({ type: CreateUsuarioDto })
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    const us_id = await this.usuariosService.create(createUsuarioDto);
    if (us_id != 'usuario ya existente') {
      this.usuarioRolService.create(us_id);
      return true;
    } else {
      return false;
    }
  }

  @Get()
  @Auth([Role.CONTADOR, Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @Auth([Role.CONTADOR, Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario' })
  findOne(@Param('id') id: number) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  @Auth([Role.CONTADOR, Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Actualizar un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario' })
  @ApiBody({ type: UpdateUsuarioDto })
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @Auth([Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Eliminar un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario' })
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(id);
  }
}
