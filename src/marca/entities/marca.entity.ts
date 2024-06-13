import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  id_marca: number;
  @Column({ type: 'varchar', nullable: false })
  nombre: string;
  @Column({ type: 'varchar', nullable: false })
  descripcion: string;
}
