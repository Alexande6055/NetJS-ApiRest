import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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

  findOne(id_marca: number) {
    return this.marcaRepository.findOneBy({ id_marca });
  }
  findOneNombre(nombre: string) {
    return this.marcaRepository.findOneBy({ nombre });
  }

  update(id_marca: number, updateMarcaDto: UpdateMarcaDto) {
    return this.marcaRepository.update(id_marca, updateMarcaDto);
  }

  remove(id_marca: number) {
    return this.marcaRepository.softDelete(id_marca);
  }
}
