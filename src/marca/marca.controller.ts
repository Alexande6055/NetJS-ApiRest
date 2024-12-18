import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';

@Controller('marca')
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) {}

  @Post()
  @Auth(Role.DIRECTOR)
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcaService.create(createMarcaDto);
  }

  @Get()
  findAll() {
    return this.marcaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.marcaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcaService.update(id, updateMarcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.marcaService.remove(id);
  }
}
