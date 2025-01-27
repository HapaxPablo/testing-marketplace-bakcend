import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type AdvertismentDocument = HydratedDocument<Advertisment>;
@Schema()
export class Advertisment {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  views: number;
  @Prop()
  likes: number;
}
export const AdvertismentSchema = SchemaFactory.createForClass(Advertisment);
