import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { FacturasModule } from './facturas/facturas.module';
import { DetalleFacturasModule } from './detalle_facturas/detalle_facturas.module';
import { TipoPagosModule } from './tipo_pagos/tipo_pagos.module';
import { IvaModule } from './iva/iva.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { TiposIdentificacionesModule } from './tipos_identificaciones/tipos_identificaciones.module';
import { UsuariosRolesModule } from './usuarios_roles/usuarios_roles.module';
import { MenusModule } from './menus/menus.module';
import { RolesMenusModule } from './roles_menus/roles_menus.module';
import { AuthModule } from './auth/auth.module';
import { CarritoCompraModule } from './carrito_compra/carrito_compra.module';
import { CarritoProductoModule } from './carrito_producto/carrito_producto.module';
import { DescuentoModule } from './descuento/descuento.module';
import { MarcaModule } from './marca/marca.module';
import { PromocionModule } from './promocion/promocion.module';

@Module({
  imports: [
    PersonasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cp2mkc21hbls738175k0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'alexander',
      password: 'fxnucSJK90Zkdertj95NwwmqPEHY2j4Z',
      database: 'dbecommers',
      ssl: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
    RolesModule,
    ProductosModule,
    CategoriasModule,
    FacturasModule,
    DetalleFacturasModule,
    TipoPagosModule,
    IvaModule,
    AutenticacionModule,
    TiposIdentificacionesModule,
    UsuariosRolesModule,
    MenusModule,
    RolesMenusModule,
    AuthModule,
    CarritoCompraModule,
    CarritoProductoModule,
    DescuentoModule,
    MarcaModule,
    PromocionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
