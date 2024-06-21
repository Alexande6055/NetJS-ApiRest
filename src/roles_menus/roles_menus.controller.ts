import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RolesMenusService } from './roles_menus.service';
import { CreateRolesMenuDto } from './dto/create-roles_menu.dto';
import { UpdateRolesMenuDto } from './dto/update-roles_menu.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('roles-menus')
@Controller('roles-menus')
export class RolesMenusController {
  constructor(private readonly rolesMenusService: RolesMenusService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relación rol-menú' })
  @ApiBody({ type: CreateRolesMenuDto })
  create(@Body() createRolesMenuDto: CreateRolesMenuDto) {
    return this.rolesMenusService.create(createRolesMenuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las relaciones rol-menú' })
  findAll() {
    return this.rolesMenusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una relación rol-menú por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación rol-menú' })
  findOne(@Param('id') id: string) {
    return this.rolesMenusService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una relación rol-menú por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación rol-menú' })
  @ApiBody({ type: UpdateRolesMenuDto })
  update(
    @Param('id') id: string,
    @Body() updateRolesMenuDto: UpdateRolesMenuDto,
  ) {
    return this.rolesMenusService.update(+id, updateRolesMenuDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una relación rol-menú por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación rol-menú' })
  remove(@Param('id') id: string) {
    return this.rolesMenusService.remove(+id);
  }
}
