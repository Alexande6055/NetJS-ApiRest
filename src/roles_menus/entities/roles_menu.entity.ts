import { Menu } from 'src/menus/entities/menu.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
