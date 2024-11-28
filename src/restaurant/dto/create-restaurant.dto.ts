import { Category } from "../schemas/restaurant.schema";
import { IsString, IsEmail, IsNumber, IsNotEmpty, IsPhoneNumber, IsEnum } from 'class-validator';

export class CreateRestaurantDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;


    @IsNotEmpty()
    @IsEmail({}, { message: "Please enter correct email address"})
    email: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsPhoneNumber('EG')
    phone: number;

    @IsNotEmpty()
    @IsEnum(Category, { message: 'please enter correct category'})
    category: Category;
}
  