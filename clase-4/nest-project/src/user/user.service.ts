import { Injectable, BadRequestException } from '@nestjs/common';
import { UserDTO } from "./DTO/User.dto";
import { User } from "./entities/User.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}
   
    //users: User[] = [];

    getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    getSpecificUser(id: number): Promise<User>{
        
        return this.userRepository.findOneById(id);
    }

    async createUser(req: UserDTO): Promise<User>{
        console.log(req);
        try {
            const salt = await bcrypt.genSalt();
            console.log(salt);
            let passwdCipher = await bcrypt.hash(req.password, salt);
            req.password = passwdCipher; 
            console.log(req.password);
            return this.userRepository.save(req);
        }
        catch(e){
            console.log("entro al catch")
            throw new BadRequestException("El usuario ua se encuentra registrado");
            
        }
    
    }

    updateUser(id: number, req: UserDTO): UserDTO{
        console.log(req.id)
        this.userRepository.update(id, req);
        return req;
    }

    deleteUser(id:number):string{
        this.userRepository.delete(id);
        return "eliminando usuario con id: "+id;
    }

    async findUserByName(username: string): Promise<User>{
        return this.userRepository.findOne({where: {username}});
    }

}
