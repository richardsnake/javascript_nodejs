import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from "@nestjs/jwt";
import { Login } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

    async login(login: Login){
        const {username, password} = login;
        const user = await this.userService.findUser(username);
        if(!user){
            throw new UnauthorizedException("Usuario o password incorrecto");
        }
        const isPassValid = await user.validatePassword(password);

        if(!isPassValid){
            throw new UnauthorizedException("Usuario o password incorrecto");
        }

        const payload = {sub: user.id, username: user.username, rol: user.profile};
        const token = await this.jwtService.signAsync(payload);

        return {
            message: "login correcto",
            access_token: token
        }
    }

}
