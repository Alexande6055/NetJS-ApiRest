import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  id_Marca: number;
  @Column({ type: 'varchar', nullable: false })
  nombre: string;
}
