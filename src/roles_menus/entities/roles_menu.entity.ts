import { Menu } from 'src/menus/entities/menu.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles_menus')
export class RolesMenu {
  @PrimaryGeneratedColumn()
  id_rol_menu: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'id_rol' })
  id_rol: Role;
  @ManyToOne(() => Menu)
  @JoinColumn({ name: 'id_menu' })
  id_menu: Menu;
}
