import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarritoCompraService } from './carrito_compra.service';
import { CreateCarritoCompraDto } from './dto/create-carrito_compra.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('carrito-compra')
@Controller('carrito-compra')
export class CarritoCompraController {
  constructor(private readonly carritoCompraService: CarritoCompraService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo carrito de compra' })
  @ApiBody({ type: CreateCarritoCompraDto })
  create(@Body() createCarritoCompraDto: CreateCarritoCompraDto) {
    return this.carritoCompraService.create();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un carrito de compra por ID' })
  @ApiParam({ name: 'id', description: 'ID del carrito de compra' })
  findOne(@Param('id') id: string) {
    return this.carritoCompraService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un carrito de compra por ID' })
  @ApiParam({ name: 'id', description: 'ID del carrito de compra' })
  remove(@Param('id') id: number) {
    return this.carritoCompraService.remove(id);
  }
}
