import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  nombre: string;
}
