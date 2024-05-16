import { Injectable } from '@nestjs/common';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';

@Injectable()
export class TipoPagosService {
  create(createTipoPagoDto: CreateTipoPagoDto) {
    return 'This action adds a new tipoPago';
  }

  findAll() {
    return `This action returns all tipoPagos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoPago`;
  }

  update(id: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    return `This action updates a #${id} tipoPago`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoPago`;
  }
}
