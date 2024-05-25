import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TiposIdentificacionesService } from './tipos_identificaciones.service';
import { CreateTiposIdentificacioneDto } from './dto/create-tipos_identificacione.dto';
import { UpdateTiposIdentificacioneDto } from './dto/update-tipos_identificacione.dto';

@Controller('tipos-identificaciones')
export class TiposIdentificacionesController {
  constructor(
    private readonly tiposIdentificacionesService: TiposIdentificacionesService,
  ) {}

  @Post()
  create(@Body() createTiposIdentificacioneDto: CreateTiposIdentificacioneDto) {
    return this.tiposIdentificacionesService.create(
      createTiposIdentificacioneDto,
    );
  }

  @Get()
  findAll() {
    return this.tiposIdentificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposIdentificacionesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTiposIdentificacioneDto: UpdateTiposIdentificacioneDto,
  ) {
    return this.tiposIdentificacionesService.update(
      id,
      updateTiposIdentificacioneDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposIdentificacionesService.remove(id);
  }
}
