import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn()
  id_menu: number;

  @Column({ type: 'varchar', length: '50', nullable: false })
  nombre: string;
}
