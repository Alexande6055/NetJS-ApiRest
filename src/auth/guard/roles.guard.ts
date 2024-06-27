import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
//reflector permite leer los metadatos a los controladores o controladores en tiempo de ejeecucion
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    //metodo que se procesa al solicitar la ruta
    context: ExecutionContext,
  ): boolean {
    const roles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(), //extraccion de los metadatos
      context.getClass(), //metadato de esta clase
    ]);
    if (!roles) {
      return true;
    }
    //accedemos al usuario mediante el context
    const { user } = context.switchToHttp().getRequest();
    console.log(user.role);
    //console.log(roles);

    //comprobacion para un array de roles
    return roles.some((role) => user.role?.includes(role));
  }
}
