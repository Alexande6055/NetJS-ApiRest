import { Module } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { FacturasController } from './facturas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';
import { PersonasModule } from 'src/personas/personas.module';
import { ProductosModule } from 'src/productos/productos.module';
import { TipoPagosModule } from 'src/tipo_pagos/tipo_pagos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Factura]),
    PersonasModule,
    ProductosModule,
    TipoPagosModule,
  ],
  controllers: [FacturasController],
  providers: [FacturasService],
})
export class FacturasModule {}
