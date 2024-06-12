import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarritoProductoService } from './carrito_producto.service';
import { CreateCarritoProductoDto } from './dto/create-carrito_producto.dto';
import { CarritoCompraService } from 'src/carrito_compra/carrito_compra.service';

@Controller('carrito-producto')
export class CarritoProductoController {
  constructor(
    private readonly carritoProductoService: CarritoProductoService,
    private readonly carritoCompraService: CarritoCompraService,
  ) {}

  @Post()
  create(@Body() createCarritoProductoDto: CreateCarritoProductoDto) {
    return this.carritoProductoService.create(createCarritoProductoDto);
  }

  @Get()
  findAll() {
    return this.carritoProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carritoProductoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carritoProductoService.remove(+id);
  }
  @Get('obtener/:id')
  obtenerProductosCarrito(@Param('id') id: number) {
    const productos =
      this.carritoProductoService.obtenerTodosProductosCarrito(id);
    return productos;
  }
}
