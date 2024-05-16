import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleFacturasService } from './detalle_facturas.service';
import { CreateDetalleFacturaDto } from './dto/create-detalle_factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle_factura.dto';

@Controller('detalle-facturas')
export class DetalleFacturasController {
  constructor(private readonly detalleFacturasService: DetalleFacturasService) {}

  @Post()
  create(@Body() createDetalleFacturaDto: CreateDetalleFacturaDto) {
    return this.detalleFacturasService.create(createDetalleFacturaDto);
  }

  @Get()
  findAll() {
    return this.detalleFacturasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleFacturasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    return this.detalleFacturasService.update(+id, updateDetalleFacturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleFacturasService.remove(+id);
  }
}
