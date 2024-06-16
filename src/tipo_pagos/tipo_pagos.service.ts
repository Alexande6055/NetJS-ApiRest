import { Injectable } from '@nestjs/common';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPago } from './entities/tipo_pago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoPagosService {
  constructor(
    @InjectRepository(TipoPago)
    private readonly tipoPagoRepository: Repository<TipoPago>,
  ) {}
  create(createTipoPagoDto: CreateTipoPagoDto) {
    return this.tipoPagoRepository.save(createTipoPagoDto);
  }

  findAll() {
    return this.tipoPagoRepository.find();
  }

  findOne(id_pago: number) {
    return this.tipoPagoRepository.findOneBy({ id_pago });
  }

  update(id_pago: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    return this.tipoPagoRepository.update(id_pago, updateTipoPagoDto);
  }

  remove(id_pago: number) {
    return this.tipoPagoRepository.softDelete(id_pago);
  }
}
