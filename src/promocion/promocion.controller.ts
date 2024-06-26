import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PromocionService } from './promocion.service';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Promocion } from './entities/promocion.entity';
import { Role } from 'src/auth/enums/rol.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';
@ApiTags('Promocion')
@Controller('promocion')
export class PromocionController {
  constructor(private readonly promocionService: PromocionService) {}

  @Post()
  @Auth([Role.ADMIN, Role.DIRECTOR])
  @ApiOperation({ summary: 'Crear una nueva promoción' })
  @ApiResponse({
    status: 201,
    description: 'La promoción ha sido creada satisfactoriamente',
    type: Promocion,
  })
  create(@Body() createPromocionDto: CreatePromocionDto) {
    return this.promocionService.create(createPromocionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las promociones' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todas las promociones',
    type: [Promocion],
  })
  findAll() {
    return this.promocionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una promoción por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la promoción' })
  @ApiResponse({
    status: 200,
    description: 'La promoción encontrada',
    type: Promocion,
  })
  findOne(@Param('id') id: number) {
    return this.promocionService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar una promoción por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la promoción' })
  @ApiResponse({
    status: 200,
    description: 'La promoción ha sido actualizada satisfactoriamente',
    type: Promocion,
  })
  @Patch(':id')
  @Auth([Role.ADMIN, Role.DIRECTOR])
  update(
    @Param('id') id: number,
    @Body() updatePromocionDto: UpdatePromocionDto,
  ) {
    return this.promocionService.update(id, updatePromocionDto);
  }

  @ApiOperation({ summary: 'Eliminar una promoción por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la promoción' })
  @ApiResponse({
    status: 200,
    description: 'La promoción ha sido eliminada satisfactoriamente',
  })
  @Delete(':id')
  @Auth([Role.ADMIN, Role.DIRECTOR])
  remove(@Param('id') id: number) {
    return this.promocionService.remove(id);
  }
}
