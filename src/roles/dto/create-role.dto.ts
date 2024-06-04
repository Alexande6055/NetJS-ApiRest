import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  nombre: string;
}
