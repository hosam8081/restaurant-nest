import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('/users')
    async getAllUsers() {
        return await this.authService.GetAllUser();
    }
    @Post('/signup')
    register(
        @Body() signupDto: SignUpDto,
    ) {
        return this.authService.register(signupDto)
    }

    @Post('/login')
    login(
        @Body() loginDto
    ) {
        return this.authService.login(loginDto)
    }
}
