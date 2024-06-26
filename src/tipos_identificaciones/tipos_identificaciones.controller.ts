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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';

@ApiTags('tipos-identificaciones')
@Controller('tipos-identificaciones')
export class TiposIdentificacionesController {
  constructor(
    private readonly tiposIdentificacionesService: TiposIdentificacionesService,
  ) {}

  @Post()
  @Auth([Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Crear un nuevo tipo de identificación' })
  @ApiBody({ type: CreateTiposIdentificacioneDto })
  create(@Body() createTiposIdentificacioneDto: CreateTiposIdentificacioneDto) {
    return this.tiposIdentificacionesService.create(
      createTiposIdentificacioneDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de identificaciones' })
  findAll() {
    return this.tiposIdentificacionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de identificación por ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de identificación' })
  findOne(@Param('id') id: number) {
    return this.tiposIdentificacionesService.findOne(id);
  }

  @Patch(':id')
  @Auth([Role.CONTADOR, Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Actualizar un tipo de identificación por ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de identificación' })
  @ApiBody({ type: UpdateTiposIdentificacioneDto })
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
  @Auth([Role.ADMIN])
  @ApiOperation({ summary: 'Eliminar un tipo de identificación por ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de identificación' })
  remove(@Param('id') id: number) {
    return this.tiposIdentificacionesService.remove(id);
  }
}
