import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvertismentController } from './advertisment/advertisment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertismentModule } from './advertisment/advertisment.module';
import { APP_FILTER } from '@nestjs/core';
import { ValidationExceptionFilter } from './validation-exception.filter';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pahapasha11:zabor21n@cluster0.qlwbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    AdvertismentModule, // This is where the AdvertismentService is being imported
  ],
  controllers: [AppController, AdvertismentController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter,
    },
  ],
})
export class AppModule {}
