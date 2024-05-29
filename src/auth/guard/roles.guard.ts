import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
//reflector permite leer los metadatos a los controladores o controladores en tiempo de ejeecucion
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    //metodo que se procesa al solicitar la ruta
    context: ExecutionContext,
  ): boolean {
    const roles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!roles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log(user.role);
    //console.log(roles);
    return roles.some((role) => user.role?.includes(role));
  }
}
