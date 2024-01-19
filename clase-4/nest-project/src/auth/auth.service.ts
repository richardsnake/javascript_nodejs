import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Login } from './dto/login.dto';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

    async validateLogin(login: Login){
       let {username, password} = login;
        //validar el usuario
        let user = await this.userService.findUserByName(username);
        console.log(user);
        if(!user){
            throw new UnauthorizedException("El usuario indicado no existe");
        }
        //validamos el password
        let isValid = await user.validatePassword(password)
        if(!isValid){
            throw new UnauthorizedException("El password indicado no es correcto");
        }
        //definir payload
        let payload = {sub: user.id, username: user.username, rol: user.profile}

        //firmar y generar el token JWT
        let token_jwt = await this.jwtService.signAsync(payload)
        console.log("autenticado", token_jwt);
        return {
            message: "usuario autenticado",
            token: token_jwt
        }


    }

}
