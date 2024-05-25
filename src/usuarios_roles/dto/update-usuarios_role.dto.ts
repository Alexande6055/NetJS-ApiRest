import { PartialType } from '@nestjs/swagger';
import { CreateUsuariosRoleDto } from './create-usuarios_role.dto';

export class UpdateUsuariosRoleDto extends PartialType(CreateUsuariosRoleDto) {}
