import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarritoCompraDto } from './dto/create-carrito_compra.dto';
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

  async findAllBy(id_carrito_compra: number) {
    const carritoCompra = await this.carritoCompraRepository.findOne({
      where: { id_carrito_compra },
      relations: ['carritoProductos', 'carritoProductos.id_producto'],
    });

    if (!carritoCompra) {
      throw new NotFoundException(
        `CarritoCompra with id ${id_carrito_compra} not found`,
      );
    }

    const productos = carritoCompra.carritoProductos.map(
      (cp) => cp.id_producto,
    );
    return productos;
  }

  async findOne(id_carrito_compra: number) {
    const carrito = await this.carritoCompraRepository.findOneBy({
      id_carrito_compra,
    });
    if (!carrito) {
      throw new NotFoundException(
        `CarritoCompra with id ${id_carrito_compra} not found`,
      );
    }
    return carrito;
  }

  remove(id: number) {
    return `This action removes a #${id} carritoCompra`;
  }
}
