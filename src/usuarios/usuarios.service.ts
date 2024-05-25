import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { Persona } from 'src/personas/entities/persona.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id_usuario: number) {
    return this.usuarioRepository.findOneBy({ id_usuario });
  }

  update(id_usuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id_usuario, updateUsuarioDto);
  }

  remove(id_usuario: number) {
    return this.usuarioRepository.softDelete(id_usuario);
  }

  //buscar usuario por nombre de usuario
  findByOneByUserName(username: string) {
    return this.usuarioRepository.findOneBy({ username });
  }
}
