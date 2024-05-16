import { Injectable } from '@nestjs/common';
import { CreateStockProductoDto } from './dto/create-stock_producto.dto';
import { UpdateStockProductoDto } from './dto/update-stock_producto.dto';

@Injectable()
export class StockProductosService {
  create(createStockProductoDto: CreateStockProductoDto) {
    return 'This action adds a new stockProducto';
  }

  findAll() {
    return `This action returns all stockProductos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockProducto`;
  }

  update(id: number, updateStockProductoDto: UpdateStockProductoDto) {
    return `This action updates a #${id} stockProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockProducto`;
  }
}
