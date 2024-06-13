import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { MarcaService } from 'src/marca/marca.service';
import { PromocionService } from 'src/promocion/promocion.service';
import { CategoriasService } from 'src/categorias/categorias.service';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly categoriaService: CategoriasService,
    private readonly marcaService: MarcaService,
    private readonly promocionService: PromocionService,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const categoria = await this.categoriaService.findByNombre(
      createProductoDto.nombre_categoria,
    );
    const marca = await this.marcaService.findOneNombre(
      createProductoDto.nombre,
    );
    const promocion = await this.promocionService.findOneByDescripcion(
      createProductoDto.descripcion_promocion,
    );
    const producto = await this.productoRepository.create({
      ...createProductoDto,
      id_categoria: categoria,
      id_marca: marca,
      id_promocion: promocion,
    });
    return this.productoRepository.save(producto);
  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id_producto: number) {
    return this.productoRepository.findOneBy({ id_producto });
  }

  update(id_producto: number, updateProductoDto: UpdateProductoDto) {
    return this.productoRepository.update(id_producto, updateProductoDto);
  }

  remove(id: number) {
    return this.productoRepository.softDelete(id);
  }

  findByNombre(nombre: string) {
    return this.productoRepository.findOneBy({ nombre });
  }
}
