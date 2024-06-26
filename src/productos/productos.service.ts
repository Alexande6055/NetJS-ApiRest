import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { MarcaService } from 'src/marca/marca.service';
import { PromocionService } from 'src/promocion/promocion.service';
import { CategoriasService } from 'src/categorias/categorias.service';
import { IvaService } from 'src/iva/iva.service';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly categoriaService: CategoriasService,
    private readonly marcaService: MarcaService,
    private readonly promocionService: PromocionService,
    private readonly ivaService: IvaService,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const categoria = await this.categoriaService.findByNombre(
      createProductoDto.nombre_categoria,
    );
    const marca = await this.marcaService.findOneNombre(
      createProductoDto.nombre,
    );
    const promocion =
      createProductoDto.id_promocion == null
        ? null
        : await this.promocionService.findOne(createProductoDto.id_promocion);

    const iva =
      createProductoDto.iva == null
        ? null
        : await this.ivaService.findOne(createProductoDto.iva);
    const producto = await this.productoRepository.create({
      ...createProductoDto,
      id_categoria: categoria,
      id_marca: marca,
      id_promocion: promocion,
      iva: iva,
    });
    return this.productoRepository.save(producto);
  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id_producto: number) {
    return this.productoRepository.findOneBy({ id_producto });
  }

  async update(id_producto: number, updateProductoDto: UpdateProductoDto) {
    const promocion =
      updateProductoDto.id_promocion == null
        ? null
        : await this.promocionService.findOne(updateProductoDto.id_promocion);
    const iva =
      updateProductoDto.iva == null
        ? null
        : await this.ivaService.findOne(updateProductoDto.iva);
    const categoria = await this.categoriaService.findByNombre(
      updateProductoDto.nombre_categoria,
    );
    const marca = await this.marcaService.findOneNombre(
      updateProductoDto.nombre,
    );
    const producto = await this.productoRepository.create({
      ...updateProductoDto,
      id_categoria: categoria,
      id_marca: marca,
      id_promocion: promocion,
      iva: iva,
    });
    return this.productoRepository.update(id_producto, producto);
  }

  remove(id: number) {
    return this.productoRepository.softDelete(id);
  }

  findByNombre(nombre: string) {
    return this.productoRepository.findOneBy({ nombre });
  }
}
