import { Injectable } from '@nestjs/common';
import { CreateIvaDto } from './dto/create-iva.dto';
import { UpdateIvaDto } from './dto/update-iva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Iva } from './entities/iva.entity';
import { Repository } from 'typeorm';

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

  update(id: number, updateIvaDto: UpdateIvaDto) {
    return `This action updates a #${id} iva`;
  }

  remove(id: number) {
    return `This action removes a #${id} iva`;
  }
}
