import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoPagosService } from './tipo_pagos.service';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';

@Controller('tipo-pagos')
export class TipoPagosController {
  constructor(private readonly tipoPagosService: TipoPagosService) {}

  @Post()
  create(@Body() createTipoPagoDto: CreateTipoPagoDto) {
    return this.tipoPagosService.create(createTipoPagoDto);
  }

  @Get()
  findAll() {
    return this.tipoPagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoPagosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoPagoDto: UpdateTipoPagoDto) {
    return this.tipoPagosService.update(+id, updateTipoPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoPagosService.remove(+id);
  }
}
