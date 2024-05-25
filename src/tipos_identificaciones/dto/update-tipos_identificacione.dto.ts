import { PartialType } from '@nestjs/swagger';
import { CreateTiposIdentificacioneDto } from './create-tipos_identificacione.dto';

export class UpdateTiposIdentificacioneDto extends PartialType(CreateTiposIdentificacioneDto) {}
