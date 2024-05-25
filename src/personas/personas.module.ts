import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { TiposIdentificacionesModule } from 'src/tipos_identificaciones/tipos_identificaciones.module';
import { TiposIdentificacionesService } from 'src/tipos_identificaciones/tipos_identificaciones.service';

@Module({
  imports: [TypeOrmModule.forFeature([Persona]), TiposIdentificacionesModule],
  controllers: [PersonasController],
  providers: [PersonasService /*, TiposIdentificacionesService*/],
  exports: [TypeOrmModule],
})
export class PersonasModule {}
