import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}
  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaRepository.save(createCategoriaDto);
  }

  findAll() {
    return this.categoriaRepository.find();
  }
  findByNombre(nombre: string) {
    return this.categoriaRepository.findOneBy({ nombre });
  }

  findOne(id_categoria: number) {
    return this.categoriaRepository.findOneBy({ id_categoria });
  }

  update(id_categoria: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.update(id_categoria, updateCategoriaDto);
  }

  remove(id_categoria: number) {
    return this.categoriaRepository.softDelete(id_categoria);
  }
}
