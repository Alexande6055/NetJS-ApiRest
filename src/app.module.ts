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
import { StockProductosModule } from './stock_productos/stock_productos.module';
import { ClientesModule } from './clientes/clientes.module';
import { CreditosModule } from './creditos/creditos.module';
import { AdminModule } from './admin/admin.module';
import { IvaModule } from './iva/iva.module';

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
    StockProductosModule,
    ClientesModule,
    CreditosModule,
    AdminModule,
    IvaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
