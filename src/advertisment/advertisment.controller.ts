import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdvertismentService } from './advertisment.service';
import { CreateAdvertismentDto } from './dto/create-advertisment.dto';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';

@Controller('advertisement')
export class AdvertismentController {
  constructor(private readonly advertismentService: AdvertismentService) {}

  @Get()
  getAll() {
    return this.advertismentService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  async create(@Body() dto: CreateAdvertismentDto) {
    return this.advertismentService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: CreateAdvertismentDto,
  ) {
    const result = await this.advertismentService.updateById(id, dto);
    return { message: 'Update', result };
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const result = await this.advertismentService.deleteById(id);
    return { message: 'Delete', result };
  }
}
