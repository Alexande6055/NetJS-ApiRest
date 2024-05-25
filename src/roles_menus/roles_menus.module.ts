import { Module } from '@nestjs/common';
import { RolesMenusService } from './roles_menus.service';
import { RolesMenusController } from './roles_menus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesMenu } from './entities/roles_menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolesMenu])],
  controllers: [RolesMenusController],
  providers: [RolesMenusService],
})
export class RolesMenusModule {}
