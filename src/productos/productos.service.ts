import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { MarcaService } from 'src/marca/marca.service';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly categoriaService: CategoriaService,
    private readonly marcaService: MarcaService,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const categoria = await this.categoriaService.findByNombre(
      createProductoDto.id_categoria,
    );
    const marca = await this.marcaService.findOneNombre(
      createProductoDto.nombre,
    );
    const producto = await this.productoRepository.create({
      ...createProductoDto,
      id_categoria: categoria,
      id_marca: marca,
    });
    return this.productoRepository.save(producto);
  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id_producto: number) {
    return this.productoRepository.findOneBy({ id_producto });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return this.productoRepository.softDelete(id);
  }

  findByNombre(nombre: string) {
    return this.productoRepository.findOneBy({ nombre });
  }
}
