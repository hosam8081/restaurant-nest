import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './schemas/restaurant.schema';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectModel('restaurant') private restaurantModel: Model<Restaurant>,
      ) {}
    async findAll(): Promise<Restaurant[]> {
        return await this.restaurantModel.find();
    }

    async create(restaurant: Restaurant): Promise<Restaurant> {
        return await this.restaurantModel.create(restaurant);
    }

    async findOne(id: string): Promise<Restaurant> {

        const restaurant = await this.restaurantModel.findById(id);

        if (!restaurant) {
            throw new NotFoundException(`Restaurant ${id} not found`);
        }
        
        return restaurant;
    }

    async update(id: string, restaurant: Restaurant) : Promise<Restaurant> {
        return await this.restaurantModel.findByIdAndUpdate(id, restaurant, {
            new: true,
            runValidators: true
        })
    }
}
