import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;
  @Column()
  nombre: string;
}
