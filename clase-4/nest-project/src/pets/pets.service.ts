import { Injectable } from '@nestjs/common';
import { Pets } from "./dto/Pets.dto";

@Injectable()
export class PetsService {

    list_pets: Pets[] = [
        {
            id: 1,
            name: "Ruffo",
            type: "Perro",
            sex: "Macho"
        },
        {
            id: 2,
            name: "Nekko chan",
            type: "Gata",
            sex: "Femenino"

        }
        ,
        {
            id: 3,
            name: "Pauli",
            type: "Loro",
            sex: "Macho"

        }
    ]

    getAllPets(): Pets[]{
        return this.list_pets;
    }

    getSpecificPet(id: number){
        return this.list_pets.find((obj)=> {
            return obj.id === id;
        });
    }

    createPet(pet: Pets): Pets{
        pet.id =  this.list_pets.length + 1;
        this.list_pets.push(pet);
        return pet;
    }

    updatePet(pet: Pets): Pets{
        let id = pet.id;
        let p = this.list_pets.find((obj)=> {
            return obj.id === id;
        });
        let index = this.list_pets.indexOf(p);
        if(index != -1)
            this.list_pets[index] = pet;
        return pet;
    }

    deletePet(id: number): Pets{
        let p = this.list_pets.find((obj)=> {
            return obj.id === id;
        });
        let index = this.list_pets.indexOf(p);
            if(index != -1)
                this.list_pets.splice(index, 1);
        return p;
    }


}
