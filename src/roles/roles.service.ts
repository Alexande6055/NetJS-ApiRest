import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.save(createRoleDto);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id_rol: number) {
    return this.roleRepository.findOneBy({ id_rol });
  }

  update(id_rol: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id_rol} role`;
  }

  remove(id_rol: number) {
    return `This action removes a #${id_rol} role`;
  }
}
