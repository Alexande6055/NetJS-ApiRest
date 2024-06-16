import { Injectable } from '@nestjs/common';
import { CreateCarritoProductoDto } from './dto/create-carrito_producto.dto';
import { UpdateCarritoProductoDto } from './dto/update-carrito_producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoComprasProducto } from './entities/carrito_producto.entity';
import { Repository } from 'typeorm';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class CarritoProductoService {
  constructor(
    @InjectRepository(CarritoComprasProducto)
    private readonly carritoProductoRepository: Repository<CarritoComprasProducto>,
    private readonly productoService: ProductosService,
  ) {}

  async create(createCarritoProductoDto: CreateCarritoProductoDto) {
    let carritoProducto = await this.carritoProductoRepository.findOne({
      where: {
        id_carrito_compra: createCarritoProductoDto.id_carrito_compra,
        id_producto: createCarritoProductoDto.id_producto,
      },
    });
    if (carritoProducto) {
      carritoProducto.cantidad++; // Incrementar la cantidad
      const carritoCompPro =
        this.carritoProductoRepository.create(carritoProducto);
      this.carritoProductoRepository.update(
        carritoProducto.id_carrito_producto,
        carritoCompPro,
      );
    } else {
      return this.carritoProductoRepository.save(createCarritoProductoDto); // Guardar o actualizar
    }
  }
  findAll() {
    return this.carritoProductoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} carritoProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} carritoProducto`;
  }
}
