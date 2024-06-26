import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';

@ApiTags('personas')
@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva persona' })
  @ApiBody({ type: CreatePersonaDto })
  async create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personasService.create(createPersonaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las personas' })
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una persona por ID' })
  @ApiParam({ name: 'id', description: 'ID de la persona' })
  findOne(@Param('id') id: number) {
    return this.personasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una persona por ID' })
  @ApiParam({ name: 'id', description: 'ID de la persona' })
  @ApiBody({ type: UpdatePersonaDto })
  update(@Param('id') id: number, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personasService.update(id, updatePersonaDto);
  }

  @Delete(':id')
  @Auth([Role.ADMIN, Role.DIRECTOR])
  @ApiOperation({ summary: 'Eliminar una persona por ID' })
  @ApiParam({ name: 'id', description: 'ID de la persona' })
  remove(@Param('id') id: number) {
    return this.personasService.remove(id);
  }
}
