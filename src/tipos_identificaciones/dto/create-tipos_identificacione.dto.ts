import { IsString } from 'class-validator';

export class CreateTiposIdentificacioneDto {
  @IsString()
  nombre: string;
}
