import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { Login } from "./dto/login.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super()
    }

    async validate(username: string, password: string): Promise<any> {
        let login = new Login();
        login.username = username;
        login.password = password
        const user = await this.authService.login(login);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}