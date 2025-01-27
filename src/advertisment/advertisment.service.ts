import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getAll() {
    return this.advertismentModel.find().exec();
  }

  async updateById(_id: string, dto: CreateAdvertismentDto) {
    const updateAdvertisment = await this.advertismentModel
      .findByIdAndUpdate(_id, dto, { new: true })
      .exec();

    if (!updateAdvertisment) {
      throw new NotFoundException('Advertisment not found');
    }

    return updateAdvertisment;
  }

  async deleteById(_id: string) {
    const deleteAdvertisment = await this.advertismentModel
      .deleteOne({ _id })
      .exec();

    if (!deleteAdvertisment) {
      throw new NotFoundException('Advertisment not found');
    }

    return deleteAdvertisment;
  }
}
