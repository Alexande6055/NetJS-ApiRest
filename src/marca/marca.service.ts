import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarcaService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}
  create(createMarcaDto: CreateMarcaDto) {
    return this.marcaRepository.save(createMarcaDto);
  }

  findAll() {
    return this.marcaRepository.find();
  }

  findOne(id_Marca: number) {
    return this.marcaRepository.findOneBy({ id_Marca });
  }

  update(id_Marca: number, updateMarcaDto: UpdateMarcaDto) {
    return this.marcaRepository.update(id_Marca, updateMarcaDto);
  }

  remove(id_Marca: number) {
    return this.marcaRepository.softDelete(id_Marca);
  }
}
