import { Injectable } from '@nestjs/common';
import { Advertisment } from './schemas/advertisment.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAdvertismentDto } from './dto/create-advertisment.dto';

@Injectable()
export class AdvertismentService {
  constructor(
    @InjectModel(Advertisment.name)
    private advertismentModel: Model<Advertisment>,
  ) {}

  async create(
    createAdvertismentDto: CreateAdvertismentDto,
  ): Promise<Types.ObjectId> {
    const advertisment = await this.advertismentModel.create(
      createAdvertismentDto,
    );
    return advertisment._id;
  }

  async findAll() {
    return this.advertismentModel.find().exec();
  }

  getTest() {
    return 'Get test!!!';
  }
}
