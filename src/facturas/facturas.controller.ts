import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
@ApiTags('facturas')
@Controller('facturas')
export class FacturasController {
  constructor(private readonly facturasService: FacturasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva factura' })
  @ApiBody({ type: CreateFacturaDto })
  create(@Body() createFacturaDto: CreateFacturaDto) {
    return this.facturasService.create(createFacturaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las facturas' })
  findAll() {
    return this.facturasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una factura por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la factura' })
  findOne(@Param('id') id_factura: number) {
    return this.facturasService.findOne(id_factura);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una factura por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la factura' })
  @ApiBody({ type: UpdateFacturaDto })
  update(
    @Param('id') id_factura: number,
    @Body() updateFacturaDto: UpdateFacturaDto,
  ) {
    return this.facturasService.update(id_factura, updateFacturaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una factura por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la factura' })
  remove(@Param('id') id_factura: number) {
    return this.facturasService.remove(id_factura);
  }
}
