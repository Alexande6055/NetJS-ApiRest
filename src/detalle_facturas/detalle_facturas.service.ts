import { Injectable } from '@nestjs/common';
import { CreateDetalleFacturaDto } from './dto/create-detalle_factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle_factura.dto';

@Injectable()
export class DetalleFacturasService {
  create(createDetalleFacturaDto: CreateDetalleFacturaDto) {
    return 'This action adds a new detalleFactura';
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
