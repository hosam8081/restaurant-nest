import { IsEmail, isEmail, IsNotEmpty, isString, IsString, MinLength } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;


    @IsNotEmpty()
    @IsEmail({}, {message: "please enter correct email"})
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    readonly password: string;

}