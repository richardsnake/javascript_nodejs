import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { Login } from "./dto/login.dto";



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(
        private readonly authService: AuthService,
    ){
        super()
    }

    async validate(username, password): Promise<any>{
        let login = new Login();
        login.username = username;
        login.password = password;

        let user = this.authService.validateLogin(login);

        if(!user)
            throw new UnauthorizedException();
        return user;
    }
}