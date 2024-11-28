import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurant.schema';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}
  // Add your restaurant controller methods here
  @Get()
  async getAllRestaurants(
    @Query('name') name?: string,
  ): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  async addRestaurant(@Body() restaurant: CreateRestaurantDto) {
    return this.restaurantService.create(restaurant);
  }

  @Get(':id')
  async getRestaurantById(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findOne(id);
  }

  @Patch(':id')
  async updateRestaurantById(
    @Param('id') id: string,
    @Body() restaurant: CreateRestaurantDto,
  ) {
    return this.restaurantService.update(id, restaurant);
  }
}
