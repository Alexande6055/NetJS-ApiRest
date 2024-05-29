import { SetMetadata } from '@nestjs/common';

//metadato
export const Roles = (role) => SetMetadata('roles', role);
