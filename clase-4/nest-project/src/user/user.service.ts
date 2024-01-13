import { Injectable } from '@nestjs/common';
import { UserDTO } from "./DTO/User.dto";
import { User } from "./entities/User.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    getSpecificUser(id: number): Promise<User>{
        
        return this.userRepository.findOneById(id);
    }

    async createUser(req: UserDTO): Promise<User>{
        console.log(req);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.password, salt);
        req.password = hashedPassword;
        return this.userRepository.save(req);

    }

    updateUser(id: number, req: UserDTO): UserDTO{
        console.log(id)
        this.userRepository.update(id, req);
        return req;
    }

    deleteUser(id:number):string {
        
        this.userRepository.delete(id);
        return "usuario eliminado  con id: "+id;
    }

    async findUser(username: string): Promise<User> {
        return await this.userRepository.findOne({where: {username}});
    }

}
