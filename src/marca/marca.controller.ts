import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Marcas')
@Controller('marca')
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) {}

  @Post()
  @Auth([Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Crear una nueva marca' })
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcaService.create(createMarcaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las marcas' })
  findAll() {
    return this.marcaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una marca por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la marca' })
  findOne(@Param('id') id: number) {
    return this.marcaService.findOne(id);
  }

  @Patch(':id')
  @Auth([Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Actualizar una marca por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la marca' })
  update(@Param('id') id: number, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcaService.update(id, updateMarcaDto);
  }

  @Delete(':id')
  @Auth([Role.DIRECTOR, Role.ADMIN])
  @ApiOperation({ summary: 'Eliminar una marca por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la marca' })
  remove(@Param('id') id: number) {
    return this.marcaService.remove(id);
  }
}
