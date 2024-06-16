import { Injectable } from '@nestjs/common';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Promocion } from './entities/promocion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromocionService {
  constructor(
    @InjectRepository(Promocion)
    private readonly promocionRepository: Repository<Promocion>,
  ) {}
  async create(createPromocionDto: CreatePromocionDto) {
    return this.promocionRepository.save(createPromocionDto);
  }

  findAll() {
    return this.promocionRepository.find();
  }

  findOne(id_promocion: number) {
    return this.promocionRepository.findOneBy({ id_promocion });
  }
  findOneByDescripcion(descripcion: string) {
    return this.promocionRepository.findOneBy({ descripcion });
  }
  update(id_promocion: number, updatePromocionDto: UpdatePromocionDto) {
    return this.promocionRepository.update(id_promocion, updatePromocionDto);
  }

  remove(id_promocion: number) {
    return this.promocionRepository.delete(id_promocion);
  }
}
