import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UserService } from "./user.service";
import { UserDTO } from "./DTO/User.dto";
import { User } from "./entities/User.entity";
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Get()
    getUser():Promise<User[]>{
        return this.userService.getAllUsers();
    }

    @Get(":id")
    getSpecificUser(@Param("id") id): Promise<User>{
        console.log("id: ", id);
        return this.userService.getSpecificUser(Number(id));
    }

    @Post()
    postUser(@Body() user): {}{
        return this.userService.createUser(user);
    }

    @Patch(":id")
    patchUser(@Param("id") id:string, @Body() user: UserDTO): UserDTO {
        return this.userService.updateUser(+id, user);

    }

    @Delete(":id")
    deleteUser(@Param("id") id): string{
        return  this.userService.deleteUser(Number(id))
    }

}
