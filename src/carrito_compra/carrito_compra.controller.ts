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
import { UpdateCarritoCompraDto } from './dto/update-carrito_compra.dto';

@Controller('carrito-compra')
export class CarritoCompraController {
  constructor(private readonly carritoCompraService: CarritoCompraService) {}

  @Post()
  create(@Body() createCarritoCompraDto: CreateCarritoCompraDto) {
    return this.carritoCompraService.create();
  }

  @Get()
  findAll() {
    return this.carritoCompraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoCompraService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarritoCompraDto: UpdateCarritoCompraDto,
  ) {
    return this.carritoCompraService.update(+id, updateCarritoCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritoCompraService.remove(+id);
  }
}
