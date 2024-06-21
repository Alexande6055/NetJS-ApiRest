import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevolucionService } from './devolucion.service';
import { CreateDevolucionDto } from './dto/create-devolucion.dto';
import { UpdateDevolucionDto } from './dto/update-devolucion.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
@ApiTags('devolucion')
@Controller('devolucion')
export class DevolucionController {
  constructor(private readonly devolucionService: DevolucionService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva devolución' })
  @ApiBody({ type: CreateDevolucionDto })
  create(@Body() createDevolucionDto: CreateDevolucionDto) {
    return this.devolucionService.create(createDevolucionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las devoluciones' })
  findAll() {
    return this.devolucionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una devolución por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la devolución' })
  findOne(@Param('id') id: string) {
    return this.devolucionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una devolución por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la devolución' })
  @ApiBody({ type: UpdateDevolucionDto })
  update(
    @Param('id') id: string,
    @Body() updateDevolucionDto: UpdateDevolucionDto,
  ) {
    return this.devolucionService.update(+id, updateDevolucionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una devolución por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la devolución' })
  remove(@Param('id') id: string) {
    return this.devolucionService.remove(+id);
  }
}
