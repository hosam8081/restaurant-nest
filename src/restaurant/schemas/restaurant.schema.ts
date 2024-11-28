import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RestaurantDocument = HydratedDocument<Restaurant>;

export enum Category {
    FAST_FOOD = 'Food',
    CAFE = 'Cafe',
    BAR = 'Bar',
    RESTAURANT = 'Restaurant',
}

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  phone: number;

  @Prop()
  category: Category;

  @Prop()
  images?: object[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);