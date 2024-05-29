import { Injectable } from '@nestjs/common';
import { CreateCarritoProductoDto } from './dto/create-carrito_producto.dto';
import { UpdateCarritoProductoDto } from './dto/update-carrito_producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoProducto } from './entities/carrito_producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarritoProductoService {
  constructor(
    @InjectRepository(CarritoProducto)
    private readonly carritoProductoRepository: Repository<CarritoProducto>,
  ) {}
  create(createCarritoProductoDto: CreateCarritoProductoDto) {
    return this.carritoProductoRepository.save(createCarritoProductoDto);
  }

  findAll() {
    return `This action returns all carritoProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carritoProducto`;
  }

  update(id: number, updateCarritoProductoDto: UpdateCarritoProductoDto) {
    return `This action updates a #${id} carritoProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} carritoProducto`;
  }
}
