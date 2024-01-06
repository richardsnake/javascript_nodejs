import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Pets } from "./dto/Pets.dto";
import { PetsService } from "./pets.service";
import { ApiTags } from '@nestjs/swagger';


@ApiTags('pets')
@Controller('pets')
export class PetsController {
    
    constructor(private readonly petService: PetsService) {} 

    @Get()
    getPets(): Pets[]{
        return this.petService.getAllPets();
    }

    @Get(":id")
    getSpecificPet(@Param("id") id): Pets{
        return this.petService.getSpecificPet(Number(id));
    }

    @Post()
    postPets(@Body() req: Pets): Pets {
        return this.petService.createPet(req);
    } 

    @Put()
    putPets(@Body() req: Pets): Pets {
        return this.petService.updatePet(req);
    } 

    @Delete(":id")
    deletePet(@Param("id") id): Pets{
        return this.petService.deletePet(Number(id));
    }

}
