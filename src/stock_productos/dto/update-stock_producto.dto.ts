import { PartialType } from '@nestjs/mapped-types';
import { CreateStockProductoDto } from './create-stock_producto.dto';

export class UpdateStockProductoDto extends PartialType(CreateStockProductoDto) {}
