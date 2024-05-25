import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  nombre: string;
}
