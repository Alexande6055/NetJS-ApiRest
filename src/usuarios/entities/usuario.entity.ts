import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'El ID del Usuario' })
  id_usuario: number;
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({
    example: 'antrox@2015',
    description: 'la contraseña del usuario',
  })
  password: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @ApiProperty({
    example: 'juan',
    description: 'el nombre del usuario',
  })
  username: string;
  @DeleteDateColumn()
  deletAt: Date;
}
