import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoPagosService } from './tipo_pagos.service';
import { CreateTipoPagoDto } from './dto/create-tipo_pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo_pago.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('tipo-pagos')
@Controller('tipo-pagos')
export class TipoPagosController {
  constructor(private readonly tipoPagosService: TipoPagosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tipo de pago' })
  @ApiBody({ type: CreateTipoPagoDto })
  create(@Body() createTipoPagoDto: CreateTipoPagoDto) {
    return this.tipoPagosService.create(createTipoPagoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de pago' })
  findAll() {
    return this.tipoPagosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de pago por su ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de pago' })
  findOne(@Param('id') id: number) {
    return this.tipoPagosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un tipo de pago por su ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de pago' })
  @ApiBody({ type: UpdateTipoPagoDto })
  update(
    @Param('id') id: number,
    @Body() updateTipoPagoDto: UpdateTipoPagoDto,
  ) {
    return this.tipoPagosService.update(+id, updateTipoPagoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tipo de pago por su ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de pago' })
  remove(@Param('id') id: number) {
    return this.tipoPagosService.remove(id);
  }
}
