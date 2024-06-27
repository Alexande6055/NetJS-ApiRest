import { Injectable } from '@nestjs/common';
import { CreateDetalleFacturaDto } from './dto/create-detalle_factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle_factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleFactura } from './entities/detalle_factura.entity';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class DetalleFacturasService {
  constructor(
    @InjectRepository(DetalleFactura)
    private readonly detalleFacturaRepository: Repository<DetalleFactura>,
    private readonly productoService: ProductosService,
  ) {}

  async create(createDetalleFacturaDto: CreateDetalleFacturaDto) {
    const registro = await this.detalleFacturaRepository.create({
      ...createDetalleFacturaDto,
      id_producto: createDetalleFacturaDto.id_producto,
      cantidad: createDetalleFacturaDto.cantidad,
    });
    const producto = await this.productoService.findOne(
      createDetalleFacturaDto.id_producto,
    );
    registro.precio_unitario = parseFloat(producto.precio.toString());
    registro.calcularTotal(createDetalleFacturaDto.cantidad);
    return this.detalleFacturaRepository.save(registro);
  }

  findAll() {
    return `This action returns all detalleFacturas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleFactura`;
  }

  update(id: number, updateDetalleFacturaDto: UpdateDetalleFacturaDto) {
    return `This action updates a #${id} detalleFactura`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleFactura`;
  }
}
