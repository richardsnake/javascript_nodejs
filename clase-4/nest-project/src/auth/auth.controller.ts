import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Post('login')
    async login(@Body() req: Login) {
        return this.authService.login(req);
    }

    @UseGuards(JwtAuthGuard)
    @Get('user-info')
    getUserInfo(@Body() req) {
    return req
  }

}
