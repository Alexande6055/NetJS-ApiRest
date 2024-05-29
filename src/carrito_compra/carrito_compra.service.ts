import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarritoCompraDto } from './dto/create-carrito_compra.dto';
import { UpdateCarritoCompraDto } from './dto/update-carrito_compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarritoCompra } from './entities/carrito_compra.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarritoCompraService {
  constructor(
    @InjectRepository(CarritoCompra)
    private readonly carritoCompraRepository: Repository<CarritoCompra>,
  ) {}

  async create() {
    const nuevoCarrito = await this.carritoCompraRepository.save(
      new CreateCarritoCompraDto(),
    );
    return nuevoCarrito;
  }

  findAll() {
    return `This action returns all carritoCompra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carritoCompra`;
  }

  update(id: number, updateCarritoCompraDto: UpdateCarritoCompraDto) {
    return `This action updates a #${id} carritoCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} carritoCompra`;
  }
}
