import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UserService } from "./user.service";
import { UserDTO } from "./DTO/User.dto";
import { User } from "./entities/User.entity";
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Get()
    getUser():UserDTO[]{
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

    @Patch()
    patchUser(@Body() user): UserDTO {
        return this.userService.updateUser(user);

    }

    @Delete(":id")
    deleteUser(@Param("id") id): UserDTO{
        return  this.userService.deleteUser(Number(id))
    }

}
