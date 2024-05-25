import { PartialType } from '@nestjs/swagger';
import { CreateRolesMenuDto } from './create-roles_menu.dto';

export class UpdateRolesMenuDto extends PartialType(CreateRolesMenuDto) {}
