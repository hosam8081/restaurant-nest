import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
      ) {}

      async GetAllUser(): Promise<User[]> {
        return await this.userModel.find();
      }

      // register User
      async register(user: SignUpDto): Promise<User> {
        const {name, email, password} = user
        
        const saltRounds = 10; // Recommended value
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        try {
            const newUser = await this.userModel.create({name, email, password: hashedPassword})
            return newUser;

        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Duplicate Email entered.')
            }
            console.error(error);
            throw new Error('Failed to register user');
        }

      }

      async login (user: loginDto): Promise<User> {
        const Targetuser = (await this.userModel.findOne({email: user.email}))

         // Compare provided password with stored hashed password
         const isPasswordValid = await bcrypt.compare(user.password, Targetuser.password);

         if (!isPasswordValid) {
            throw new UnauthorizedException('email or password is not valid')
         }

        if (!user) {
            throw new UnauthorizedException('User not found')
        }

        return Targetuser
      }
}
