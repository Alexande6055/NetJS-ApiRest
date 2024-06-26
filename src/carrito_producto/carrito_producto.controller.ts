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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateCarritoProductoDto } from './dto/update-carrito_producto.dto';
@ApiTags('carrito-producto')
@Controller('carrito-producto')
export class CarritoProductoController {
  constructor(
    private readonly carritoProductoService: CarritoProductoService,
    private readonly carritoCompraService: CarritoCompraService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto en el carrito' })
  @ApiBody({ type: CreateCarritoProductoDto })
  create(@Body() createCarritoProductoDto: CreateCarritoProductoDto) {
    console.log();
    console.log(createCarritoProductoDto.id_carrito_compra);
    console.log(createCarritoProductoDto);
    return this.carritoProductoService.create(createCarritoProductoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos en el carrito' })
  findAll() {
    return this.carritoProductoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto en el carrito por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto en el carrito' })
  findOne(@Param('id') id: string) {
    return this.carritoProductoService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto del carrito por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto en el carrito' })
  remove(@Param('id') id: string) {
    return this.carritoProductoService.remove(+id);
  }
  @Get('obtener/:id')
  @ApiOperation({ summary: 'Obtener todos los productos de un carrito por ID' })
  @ApiParam({ name: 'id', description: 'ID del carrito de compra' })
  obtenerProductosCarrito(@Param('id') id: number) {
    return this.carritoCompraService.findAllBy(id);
  }

  @Post('restar')
  @ApiOperation({ summary: 'Quitar un producto del carrito por ID' })
  @ApiParam({ name: 'id', description: 'ID del registro' })
  update(@Body() id_carrito_producto: { id_carrito_producto: number }) {
    return this.carritoProductoService.quitarProducto(
      id_carrito_producto.id_carrito_producto,
    );
  }
}
