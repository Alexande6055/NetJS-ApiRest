import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del Menu' })
  id_menu: number;

  @ApiProperty({ description: 'Nombre de la ventana' })
  @Column({ type: 'varchar', length: '50', nullable: false })
  nombre: string;
}
