import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DetalleFacturasService } from './detalle_facturas.service';
import { CreateDetalleFacturaDto } from './dto/create-detalle_factura.dto';
import { UpdateDetalleFacturaDto } from './dto/update-detalle_factura.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';
import { CarritoProductoService } from 'src/carrito_producto/carrito_producto.service';
@ApiTags('detalle-facturas')
@Controller('detalle-facturas')
export class DetalleFacturasController {
  constructor(
    private readonly detalleFacturasService: DetalleFacturasService,
    private readonly carritoProductoService: CarritoProductoService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo detalle de factura' })
  @ApiBody({ type: CreateDetalleFacturaDto })
  create(@Body() createDetalleFacturaDto: CreateDetalleFacturaDto) {
    console.log(createDetalleFacturaDto);
    this.detalleFacturasService.create(createDetalleFacturaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los detalles de factura' })
  findAll() {
    return this.detalleFacturasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un detalle de factura por su ID' })
  @ApiParam({ name: 'id', description: 'ID del detalle de factura' })
  findOne(@Param('id') id: string) {
    return this.detalleFacturasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un detalle de factura por su ID' })
  @ApiParam({ name: 'id', description: 'ID del detalle de factura' })
  @ApiBody({ type: UpdateDetalleFacturaDto })
  update(
    @Param('id') id_detalle_factura: number,
    @Body() updateDetalleFacturaDto: UpdateDetalleFacturaDto,
  ) {
    return this.detalleFacturasService.update(
      id_detalle_factura,
      updateDetalleFacturaDto,
    );
  }

  @Delete(':id')
  @Auth([Role.ADMIN, Role.CONTADOR])
  @ApiOperation({ summary: 'Eliminar un detalle de factura por su ID' })
  @ApiParam({ name: 'id', description: 'ID del detalle de factura' })
  remove(@Param('id') id_detalle_factura: number) {
    return this.detalleFacturasService.remove(id_detalle_factura);
  }
  @Delete('carrito/:id')
  @Auth([Role.ADMIN, Role.CONTADOR])
  @ApiOperation({ summary: 'Eliminar un carrito por su ID' })
  @ApiParam({ name: 'id', description: 'ID del carrito_compra' })
  removeCarrito(@Param('id') id: number) {
    return this.carritoProductoService.vaciarCarritoId(id);
  }
}
