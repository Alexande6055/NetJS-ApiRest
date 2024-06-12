import { Module } from '@nestjs/common';
import { PromocionService } from './promocion.service';
import { PromocionController } from './promocion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promocion } from './entities/promocion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promocion])],
  controllers: [PromocionController],
  providers: [PromocionService],
})
export class PromocionModule {}
