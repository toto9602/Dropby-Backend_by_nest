import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { DropModule } from './drop/drop.module';
import { PlaceModule } from './place/place.module';
import { AreaModule } from './area/area.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DropModule, PlaceModule, AreaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
