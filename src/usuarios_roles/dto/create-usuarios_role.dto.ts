import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateUsuariosRoleDto {
  @IsInt()
  id_usuario: number;
}
