import { UseGuards, applyDecorators } from '@nestjs/common';
import { Role } from '../enums/rol.enum';
import { RolesGuard } from '../guard/roles.guard';
import { AuthGuard } from '../guard/auth.guard';
import { Roles } from './roles.decorator';

export function Auth(rol: Role) {
  //aplicar mas de un decorador
  return applyDecorators(Roles([rol]), UseGuards(AuthGuard, RolesGuard));
}
