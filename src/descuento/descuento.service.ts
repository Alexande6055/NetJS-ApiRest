import { Injectable } from '@nestjs/common';
import { CreateDescuentoDto } from './dto/create-descuento.dto';
import { UpdateDescuentoDto } from './dto/update-descuento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Descuento } from './entities/descuento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DescuentoService {
  constructor(
    @InjectRepository(Descuento)
    private readonly descuentoRepository: Repository<Descuento>,
  ) {}
  create(createDescuentoDto: CreateDescuentoDto) {
    return this.descuentoRepository.save(createDescuentoDto);
  }

  findAll() {
    return this.descuentoRepository.find();
  }

  findOne(id_descuento: number) {
    return this.descuentoRepository.findOneBy({ id_descuento });
  }

  update(id_descuento: number, updateDescuentoDto: UpdateDescuentoDto) {
    return this.descuentoRepository.update(id_descuento, updateDescuentoDto);
  }

  remove(id_descuento: number) {
    return this.descuentoRepository.softDelete(id_descuento);
  }
}
