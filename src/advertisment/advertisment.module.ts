import { Module } from '@nestjs/common';
import { AdvertismentController } from './advertisment.controller';
import { AdvertismentService } from './advertisment.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Advertisment,
  AdvertismentSchema,
} from './schemas/advertisment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Advertisment.name, schema: AdvertismentSchema },
    ]),
  ],
  controllers: [AdvertismentController],
  providers: [AdvertismentService],
  exports: [AdvertismentService],
})
export class AdvertismentModule {}
