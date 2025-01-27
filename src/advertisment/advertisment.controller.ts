import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdvertismentService } from './advertisment.service';
import { CreateAdvertismentDto } from './dto/create-advertisment.dto';

@Controller('advertisement')
export class AdvertismentController {
  constructor(private readonly advertismentService: AdvertismentService) {}

  @Get()
  getAll() {
    return this.advertismentService.findAll();
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  async create(@Body() dto: CreateAdvertismentDto) {
    return this.advertismentService.create(dto);
  }
}
