import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ example: 'Admin', description: 'Nombre del rol' })
  nombre: string;
}
