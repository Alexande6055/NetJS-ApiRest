import { Module } from '@nestjs/common';
import { TiposIdentificacionesService } from './tipos_identificaciones.service';
import { TiposIdentificacionesController } from './tipos_identificaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposIdentificacione } from './entities/tipos_identificacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposIdentificacione])],
  controllers: [TiposIdentificacionesController],
  providers: [TiposIdentificacionesService],
  exports: [TypeOrmModule], // Habilita la exportación del repositorio desde este módulo
})
export class TiposIdentificacionesModule {}
