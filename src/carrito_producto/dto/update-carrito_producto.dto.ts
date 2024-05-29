import { PartialType } from '@nestjs/swagger';
import { CreateCarritoProductoDto } from './create-carrito_producto.dto';

export class UpdateCarritoProductoDto extends PartialType(CreateCarritoProductoDto) {}
