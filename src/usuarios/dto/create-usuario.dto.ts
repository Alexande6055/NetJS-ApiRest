import { IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  password: string;
  @IsString()
  username: string;
}
