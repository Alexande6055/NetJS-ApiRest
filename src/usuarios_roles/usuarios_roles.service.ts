import { Injectable } from '@nestjs/common';
import { CreateUsuariosRoleDto } from './dto/create-usuarios_role.dto';
import { UpdateUsuariosRoleDto } from './dto/update-usuarios_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosRole } from './entities/usuarios_role.entity';
import { Repository } from 'typeorm';
import { RolesService } from 'src/roles/roles.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class UsuariosRolesService {
  constructor(
    @InjectRepository(UsuariosRole)
    private usuarioRolRepository: Repository<UsuariosRole>,
    private rolesService: RolesService,
    private usuarioService: UsuariosService,
  ) {}
  async create(createUsuariosRoleDto: CreateUsuariosRoleDto) {
    const rol = await this.rolesService.findOne(2);
    const us = this.usuarioRolRepository.create({
      ...createUsuariosRoleDto,
      id_rol: rol,
    });
    return this.usuarioRolRepository.save(us);
  }
  findOne(id_usuario_rol: number) {
    return this.usuarioRolRepository.findOneBy({ id_usuario_rol });
  }

  findAllRols(id_usuario: number) {
    return this.usuarioRolRepository.find({
      where: { id_usuario },
      relations: ['id_rol'],
    });
  }

  async actualizarRoles(
    id_usuario: number,
    roleIds: number[],
  ): Promise<UsuariosRole[]> {
    try {
      // Eliminar todos los roles actuales del usuario
      await this.eliminarRolesUsuario(id_usuario);

      // Crear y guardar nuevos roles
      const nuevosRoles = roleIds.map((roleId) => {
        const usuarioRole = new UsuariosRole();
        usuarioRole.id_usuario = id_usuario;
        usuarioRole.id_rol = { id_rol: roleId } as any; // Asignar solo el ID del rol
        return usuarioRole;
      });

      const rolesGuardados = await this.usuarioRolRepository.save(nuevosRoles);
      return rolesGuardados;
    } catch (error) {
      throw new Error(
        `Error al actualizar roles del usuario: ${error.message}`,
      );
    }
  }

  private async eliminarRolesUsuario(id_usuario: number) {
    return this.usuarioRolRepository.delete({ id_usuario });
  }
}
