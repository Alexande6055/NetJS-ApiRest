import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockProductosService } from './stock_productos.service';
import { CreateStockProductoDto } from './dto/create-stock_producto.dto';
import { UpdateStockProductoDto } from './dto/update-stock_producto.dto';

@Controller('stock-productos')
export class StockProductosController {
  constructor(private readonly stockProductosService: StockProductosService) {}

  @Post()
  create(@Body() createStockProductoDto: CreateStockProductoDto) {
    return this.stockProductosService.create(createStockProductoDto);
  }

  @Get()
  findAll() {
    return this.stockProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockProductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockProductoDto: UpdateStockProductoDto) {
    return this.stockProductosService.update(+id, updateStockProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockProductosService.remove(+id);
  }
}
