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

@Controller('carrito-compra')
export class CarritoCompraController {
  constructor(private readonly carritoCompraService: CarritoCompraService) {}

  @Post()
  create(@Body() createCarritoCompraDto: CreateCarritoCompraDto) {
    return this.carritoCompraService.create();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoCompraService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carritoCompraService.remove(id);
  }
}
