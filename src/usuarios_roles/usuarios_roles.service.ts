import { Injectable } from '@nestjs/common';
import { CreateUsuariosRoleDto } from './dto/create-usuarios_role.dto';
import { UpdateUsuariosRoleDto } from './dto/update-usuarios_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosRole } from './entities/usuarios_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosRolesService {
  constructor(
    @InjectRepository(UsuariosRole)
    private usuarioRolRepository: Repository<UsuariosRole>,
  ) {}
  create(createUsuariosRoleDto: CreateUsuariosRoleDto) {
    return this.usuarioRolRepository.save(createUsuariosRoleDto);
  }

  findAll() {
    return this.usuarioRolRepository.find();
  }

  findOne(id_usuario_rol: number) {
    return this.usuarioRolRepository.findOneBy({ id_usuario_rol });
  }

  update(id_usuario_rol: number, updateUsuariosRoleDto: UpdateUsuariosRoleDto) {
    return this.usuarioRolRepository.update(
      id_usuario_rol,
      updateUsuariosRoleDto,
    );
  }
  /*
  remove(id_usuario_rol: number) {
    return this.usuarioRolRepository.softDelete(id_usuario_rol);
  }
*/
}
