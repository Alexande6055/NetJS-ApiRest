import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesMenusService } from './roles_menus.service';
import { CreateRolesMenuDto } from './dto/create-roles_menu.dto';
import { UpdateRolesMenuDto } from './dto/update-roles_menu.dto';

@Controller('roles-menus')
export class RolesMenusController {
  constructor(private readonly rolesMenusService: RolesMenusService) {}

  @Post()
  create(@Body() createRolesMenuDto: CreateRolesMenuDto) {
    return this.rolesMenusService.create(createRolesMenuDto);
  }

  @Get()
  findAll() {
    return this.rolesMenusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesMenusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolesMenuDto: UpdateRolesMenuDto) {
    return this.rolesMenusService.update(+id, updateRolesMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesMenusService.remove(+id);
  }
}
