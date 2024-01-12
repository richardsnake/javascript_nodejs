import { Injectable } from '@nestjs/common';
import { UserDTO } from "./DTO/User.dto";
import { User } from "./entities/User.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}
/*
    constructor(
        @InjectRepository(User)
        private readonly userRepoitory: Repository<User>,
    ){}
*/    
    users: User[] = [];

    getAllUsers(): UserDTO[] {
        return this.users;
    }

    getSpecificUser(id: number): Promise<User>{
        
        //return this.userRepoitory.findOneById(id);
        return null;
    }

    createUser(req: UserDTO): UserDTO{
        console.log(req);
        req.id = this.users.length + 1
        this.users.push(req);
        return req;
    }

    updateUser(req: UserDTO): UserDTO{
        console.log(req.id)
        let id = req.id;
        let user = this.users.find((obj)=> {
            return obj.id === id;
        });
        let index = this.users.indexOf(user);
        /*user.name = req.name;
        user.lastname = req.lastname;
        user.age = req.age;
        user.email = req.email;
        user.profile = req.profile;
        this.users[index] = user;*/
        return user;
    }

    deleteUser(id:number):UserDTO{
        let user = this.users.find((obj)=> {
            return obj.id === id;
        });
        console.log(user);
        let index = this.users.indexOf(user);
        if(index != -1){
            this.users.splice(index, 1);
        }
        //return "eliminando usuario con id: "+id;
        return user;
    }

}
