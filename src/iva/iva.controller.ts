import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IvaService } from './iva.service';
import { CreateIvaDto } from './dto/create-iva.dto';

@Controller('iva')
export class IvaController {
  constructor(private readonly ivaService: IvaService) {}

  @Post()
  create(@Body() createIvaDto: CreateIvaDto) {
    return this.ivaService.create(createIvaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ivaService.findOne(id);
  }
  @Get()
  findAll() {
    return this.ivaService.findAll();
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ivaService.remove(id);
  }
}
