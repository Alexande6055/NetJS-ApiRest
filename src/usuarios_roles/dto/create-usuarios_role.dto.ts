import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateUsuariosRoleDto {
  @IsInt()
  @ApiProperty({ description: 'ID del usuario', example: 1 })
  id_usuario: number;
}
