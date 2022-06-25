import { Body, Controller, Headers, Post } from '@nestjs/common';
import {SignUpDto} from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';


@Controller('auth')
export class UserController {

    constructor(private userService:UserService) {}

    @Post('signup')
    async signUp(@Body() signupDto:SignUpDto) {
        this.userService.signup(signupDto);
    }

    @Post('login')
    async logIn(@Body() loginDto:LoginDto) {
        this.userService.login(loginDto);
    }

    @Post('token/refresh')
    async tokenRefresh(@Headers() headers) {
        this.userService.tokenRefresh(headers);
    }

    @Post('logout')
    async logout(@Headers() headers) {
        this.userService.logout(headers);
    }

}
