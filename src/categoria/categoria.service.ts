import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepositori: Repository<Categoria>,
  ) {}
  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaRepositori.save(createCategoriaDto);
  }

  findAll() {
    return this.categoriaRepositori.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
  findByNombre(nombre: string) {
    return this.categoriaRepositori.findOneBy({ nombre });
  }
}
