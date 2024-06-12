import { Injectable } from '@nestjs/common';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';
import { Promocion } from './entities/promocion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PromocionService {
  constructor(
    @InjectRepository(Promocion)
    private readonly promocionRepocitorio: Repository<Promocion>,
  ) {}

  create(createPromocionDto: CreatePromocionDto) {
    return this.promocionRepocitorio.save(createPromocionDto);
  }

  findAll() {
    return this.promocionRepocitorio.find();
  }

  findOne(id_procion: number) {
    return this.promocionRepocitorio.findOneBy({ id_procion });
  }

  update(id_procion: number, updatePromocionDto: UpdatePromocionDto) {
    return this.update(id_procion, updatePromocionDto);
  }

  remove(id_procion: number) {
    return this.promocionRepocitorio.softDelete(id_procion);
  }
}
