import { Module } from '@nestjs/common';
import { DropController } from './drop.controller';

@Module({
  controllers: [DropController]
})
export class DropModule {}
