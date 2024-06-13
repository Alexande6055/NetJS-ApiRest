import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  password: string;
  @IsString()
  username: string;
  @IsOptional()
  @IsNumber()
  id_descuento?: number;
}
