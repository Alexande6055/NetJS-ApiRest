import { SetMetadata } from '@nestjs/common';

//metadato
//clave y valor
export const ROLES_KEY = 'roles';
export const Roles = (role) => SetMetadata(ROLES_KEY, role);
