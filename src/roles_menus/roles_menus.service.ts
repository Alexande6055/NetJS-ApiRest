import { Injectable } from '@nestjs/common';
import { CreateRolesMenuDto } from './dto/create-roles_menu.dto';
import { UpdateRolesMenuDto } from './dto/update-roles_menu.dto';

@Injectable()
export class RolesMenusService {
  create(createRolesMenuDto: CreateRolesMenuDto) {
    return 'This action adds a new rolesMenu';
  }

  findAll() {
    return `This action returns all rolesMenus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolesMenu`;
  }

  update(id: number, updateRolesMenuDto: UpdateRolesMenuDto) {
    return `This action updates a #${id} rolesMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolesMenu`;
  }
}
