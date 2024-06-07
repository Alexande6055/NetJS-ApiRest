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
    const produc = await this.productoService.findOne(
      createCarritoProductoDto.id_producto,
    );
    const carrito_produc = await this.carritoProductoRepository.create({
      ...createCarritoProductoDto,
      id_producto: produc,
    });
    return this.carritoProductoRepository.save(carrito_produc);
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
