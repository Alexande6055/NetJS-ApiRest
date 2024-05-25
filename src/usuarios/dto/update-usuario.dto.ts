import { IsOptional } from 'class-validator';
import { IsString, MinLength } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @MinLength(8)
  @IsOptional()
  password?: string;
}
