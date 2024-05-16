import { Module } from '@nestjs/common';
import { TipoPagosService } from './tipo_pagos.service';
import { TipoPagosController } from './tipo_pagos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPago } from './entities/tipo_pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPago])],
  controllers: [TipoPagosController],
  providers: [TipoPagosService],
})
export class TipoPagosModule {}
