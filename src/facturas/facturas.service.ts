import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';
import { Repository } from 'typeorm';
import { ProductosService } from 'src/productos/productos.service';
import { PersonasService } from 'src/personas/personas.service';
import { TipoPagosService } from 'src/tipo_pagos/tipo_pagos.service';

@Injectable()
export class FacturasService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
    private readonly productoService: ProductosService,
    private readonly personaService: PersonasService,
    private readonly pagoService: TipoPagosService,
  ) {}
  async create(createFacturaDto: CreateFacturaDto) {
    const persona = await this.personaService.findOne(createFacturaDto.persona);
    const pago = await this.pagoService.findOne(createFacturaDto.tipoPago);
    const registro = this.facturaRepository.create(createFacturaDto);
    registro.fecha = new Date();
    const factura = await this.facturaRepository.save(registro);
    return factura;
  }

  findAll() {
    return `This action returns all facturas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
