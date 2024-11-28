import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class loginDto {
    @IsNotEmpty()
    @IsEmail({}, {message: "please enter correct email"})
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}