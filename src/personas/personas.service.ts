import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { TiposIdentificacione } from 'src/tipos_identificaciones/entities/tipos_identificacione.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class PersonasService {
  //private readonly tiposIdentificacionesService: TiposIdentificacionesService;
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    @InjectRepository(TiposIdentificacione)
    private readonly tiposIdentificacioneRepository: Repository<TiposIdentificacione>,
    private readonly usuariosService: UsuariosService,
  ) {}

  async create(createPersonaDto: CreatePersonaDto) {
    //crea la persona con el dto
    //const persona = this.personaRepository.create(createPersonaDto);
    const tipoIdentificacion =
      await this.tiposIdentificacioneRepository.findOneBy({
        nombre: createPersonaDto.nombre_tipoIdentificacion,
      });
    const usuario = await this.usuariosService.findOne(
      createPersonaDto.id_usuario,
    );
    if (!tipoIdentificacion) {
      throw new NotFoundException(
        `Tipo de Identificación with nombre ${createPersonaDto.nombre_tipoIdentificacion} not found`,
      );
    }

    const persona = this.personaRepository.create({
      ...createPersonaDto,
      id_tipo_identificacion: tipoIdentificacion.id_tipo_identidicacion,
      id_usuario: usuario,
    });
    return this.personaRepository.save(persona);
  }

  async findAll() {
    return await this.personaRepository.find({
      relations: ['id_usuario'],
    });
  }

  async findOne(id_persona: number) {
    return await this.personaRepository.findOneBy({ id_persona });
  }

  async update(id_persona: number, updatePersonaDto: UpdatePersonaDto) {
    return await this.personaRepository.update(id_persona, updatePersonaDto);
  }

  async remove(id_persona: number) {
    // Eliminacion Logica, se le pasa el id
    return await this.personaRepository.softDelete({ id_persona });
    // Eliminacion Fisica, se le pasa la instancia
    //    return await this.personaRepository.softRemove({ id_persona });
  }
}
