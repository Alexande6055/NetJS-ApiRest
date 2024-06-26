import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IvaService } from './iva.service';
import { CreateIvaDto } from './dto/create-iva.dto';
import { UpdateIvaDto } from './dto/update-iva.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/enums/rol.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';

@ApiTags('iva')
@Controller('iva')
export class IvaController {
  constructor(private readonly ivaService: IvaService) {}

  @Post()
  @Auth([Role.DIRECTOR, Role.ADMIN, Role.CONTADOR])
  @ApiOperation({ summary: 'Crear un nuevo registro de IVA' })
  @ApiBody({ type: CreateIvaDto })
  create(@Body() createIvaDto: CreateIvaDto) {
    return this.ivaService.create(createIvaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los registros de IVA' })
  findAll() {
    return this.ivaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un registro de IVA por ID' })
  @ApiParam({ name: 'id', description: 'ID del registro de IVA' })
  findOne(@Param('id') id: string) {
    return this.ivaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un registro de IVA por ID' })
  @ApiParam({ name: 'id', description: 'ID del registro de IVA' })
  @ApiBody({ type: UpdateIvaDto })
  update(@Param('id') id: string, @Body() updateIvaDto: UpdateIvaDto) {
    return this.ivaService.update(+id, updateIvaDto);
  }

  @Delete(':id')
  @Auth([Role.ADMIN, Role.CONTADOR])
  @ApiOperation({ summary: 'Eliminar un registro de IVA por ID' })
  @ApiParam({ name: 'id', description: 'ID del registro de IVA' })
  remove(@Param('id') id: string) {
    return this.ivaService.remove(+id);
  }
}
