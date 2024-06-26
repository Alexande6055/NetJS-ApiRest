import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DescuentoService } from './descuento.service';
import { CreateDescuentoDto } from './dto/create-descuento.dto';
import { UpdateDescuentoDto } from './dto/update-descuento.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';
@ApiTags('descuento')
@Controller('descuento')
export class DescuentoController {
  constructor(private readonly descuentoService: DescuentoService) {}

  @Post()
  @Auth([Role.DIRECTOR, Role.ADMIN, Role.CONTADOR])
  @ApiOperation({ summary: 'Crear un nuevo descuento' })
  @ApiBody({ type: CreateDescuentoDto })
  create(@Body() createDescuentoDto: CreateDescuentoDto) {
    return this.descuentoService.create(createDescuentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los descuentos' })
  findAll() {
    return this.descuentoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un descuento por su ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  findOne(@Param('id') id: number) {
    return this.descuentoService.findOne(id);
  }

  @Patch(':id')
  @Auth([Role.DIRECTOR, Role.ADMIN, Role.CONTADOR])
  @ApiOperation({ summary: 'Actualizar un descuento por su ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  @ApiBody({ type: UpdateDescuentoDto })
  update(
    @Param('id') id: number,
    @Body() updateDescuentoDto: UpdateDescuentoDto,
  ) {
    return this.descuentoService.update(id, updateDescuentoDto);
  }

  @Delete(':id')
  @Auth([Role.DIRECTOR, Role.ADMIN, Role.CONTADOR])
  @ApiOperation({ summary: 'Eliminar un descuento por su ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  remove(@Param('id') id: number) {
    return this.descuentoService.remove(id);
  }
}
