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

  async create(createDetalleFacturaDto: CreateDetalleFacturaDto[]) {
    const detallesFactura = [];
    console.log(1);
    // for (const detalleDto of createDetalleFacturaDto) {
    for (let i = 0; i < createDetalleFacturaDto.length; i++) {
      const registro = await this.detalleFacturaRepository.create({
        id_producto: parseInt(
          createDetalleFacturaDto[i].id_producto.toString(),
        ),
        cantidad: parseInt(createDetalleFacturaDto[i].cantidad.toString()),
      });
      const producto = await this.productoService.findOne(
        createDetalleFacturaDto[i].cantidad,
      );
      console.log(producto);
      registro.calcularTotal(
        parseFloat(producto.precio.toString()),
        createDetalleFacturaDto[i].cantidad,
      );
      const detalleGuardado =
        await this.detalleFacturaRepository.save(registro);
      detallesFactura.push(detalleGuardado);
      console.log(i);
    }
    return detallesFactura;
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
