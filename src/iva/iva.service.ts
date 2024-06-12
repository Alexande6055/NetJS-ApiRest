import { Injectable } from '@nestjs/common';
import { CreateIvaDto } from './dto/create-iva.dto';
import { UpdateIvaDto } from './dto/update-iva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Iva } from './entities/iva.entity';

@Injectable()
export class IvaService {
  constructor(
    @InjectRepository(Iva)
    private readonly ivaRepository: Repository<Iva>,
  ) {}
  create(createIvaDto: CreateIvaDto) {
    return this.ivaRepository.save(createIvaDto);
  }

  findAll() {
    return this.ivaRepository.find();
  }

  findOne(id_iva: number) {
    return this.ivaRepository.findOneBy({ id_iva });
  }

  remove(id_iva: number) {
    return this.ivaRepository.softDelete(id_iva);
  }
}
