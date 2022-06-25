import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { DropModule } from './drop/drop.module';
import { UserModule } from './user/user.module';
import { AreaModule } from './area/area.module';
import { PlaceModule } from './place/place.module';
import { ImageController } from './image/image.controller';

@Module({
  imports: [TypeOrmModule.forRoot(),
            DropModule,
            UserModule,
            AreaModule,
            PlaceModule
          ],
  controllers: [AppController, ImageController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection:Connection) {}
}
