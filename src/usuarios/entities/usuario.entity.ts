import { ApiProperty } from '@nestjs/swagger';
import { CarritoCompra } from 'src/carrito_compra/entities/carrito_compra.entity';
import { Descuento } from 'src/descuento/entities/descuento.entity';
import { UsuariosRole } from 'src/usuarios_roles/entities/usuarios_role.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuarios')
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
  @OneToOne(() => CarritoCompra)
  @JoinColumn({ name: 'id_carrito_compra' })
  id_carrito_compra: CarritoCompra;

  @OneToMany(() => UsuariosRole, (usuarioRole) => usuarioRole.id_usuario)
  usuarioRoles: UsuariosRole[];
  @DeleteDateColumn()
  deletAt: Date;
  @ManyToOne(() => Descuento, (descuento) => descuento.id_descuento, {
    nullable: true,
  })
  @JoinColumn({ name: 'id_descuento' })
  descuento: number;
}
