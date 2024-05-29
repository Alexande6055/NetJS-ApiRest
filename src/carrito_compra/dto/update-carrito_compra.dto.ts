import { PartialType } from '@nestjs/swagger';
import { CreateCarritoCompraDto } from './create-carrito_compra.dto';

export class UpdateCarritoCompraDto extends PartialType(CreateCarritoCompraDto) {}
