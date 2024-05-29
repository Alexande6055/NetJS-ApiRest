import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { CarritoCompraService } from 'src/carrito_compra/carrito_compra.service';
import { UsuariosRole } from 'src/usuarios_roles/entities/usuarios_role.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly carritoCompraService: CarritoCompraService,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const carritoCompra = await this.carritoCompraService.create();
    if (!carritoCompra) {
      throw new Error('No se pudo crear el carrito para el usuario');
    }
    const usuario = this.usuarioRepository.create({
      ...createUsuarioDto,
      id_carrito_compra: carritoCompra,
    });
    return this.usuarioRepository.save(usuario);
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

  async obtenerPermisos(username: string): Promise<string[]> {
    const user = await this.usuarioRepository.findOne({
      where: { username },
      relations: ['usuarioRoles.id_rol'], // Carga los roles relacionados
    });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    const roles = user.usuarioRoles.map((role) => role.id_rol.persona);
    return roles;
  }
}
