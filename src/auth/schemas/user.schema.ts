import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

@Schema()
export class User extends Document {
   @Prop({unique: true, required: true})
   email: string;

   @Prop({selected: true, required: true})
   password: string;
    
   name: string;

   @Prop({enum: UserRole, default: UserRole.USER })
   role: UserRole
}


export const UserSchema = SchemaFactory.createForClass(User);