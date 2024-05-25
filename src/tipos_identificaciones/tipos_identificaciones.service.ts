import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTiposIdentificacioneDto } from './dto/create-tipos_identificacione.dto';
import { UpdateTiposIdentificacioneDto } from './dto/update-tipos_identificacione.dto';
import { Repository } from 'typeorm';
import { TiposIdentificacione } from './entities/tipos_identificacione.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TiposIdentificacionesService {
  constructor(
    @InjectRepository(TiposIdentificacione)
    private readonly tiposIdentificacionRepository: Repository<TiposIdentificacione>,
  ) {}
  create(createTiposIdentificacioneDto: CreateTiposIdentificacioneDto) {
    return this.tiposIdentificacionRepository.save(
      createTiposIdentificacioneDto,
    );
  }

  findAll() {
    return this.tiposIdentificacionRepository.find();
  }

  async findOne(id_tipo_identidicacion: number) {
    const tipoIdentificacion = await this.tiposIdentificacionRepository.findOne(
      {
        where: { id_tipo_identidicacion },
      },
    );

    if (!tipoIdentificacion) {
      throw new NotFoundException(
        `Tipo de Identificación with ID ${id_tipo_identidicacion} not found`,
      );
    }

    return tipoIdentificacion;
    //return this.tiposIdentificacionRepository.findBy({
    //  id_tipo_identidicacion,
    //});
  }

  update(
    id_tipo_identidicacion: number,
    updateTiposIdentificacioneDto: UpdateTiposIdentificacioneDto,
  ) {
    return this.tiposIdentificacionRepository.update(
      id_tipo_identidicacion,
      updateTiposIdentificacioneDto,
    );
  }

  remove(id_tipo_identidicacion: number) {
    return this.tiposIdentificacionRepository.softDelete(
      id_tipo_identidicacion,
    );
  }
}
