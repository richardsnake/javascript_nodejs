import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository, IsNull } from 'typeorm';
import { PersonaDTO } from './dtos/persona.dto';

@Injectable()
export class PersonaService {

    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
      ){}

    createPersona(persona: PersonaDTO){
        console.log("creando nueva persona: ", persona);
        this.personaRepository.save(persona);
    }

    obtenerPersonas(): Promise<Persona[]>
    {
        return this.personaRepository.find();
    }

    async obtenerPersonaById(id: number): Promise<Persona>{
        let p = await this.personaRepository.findOneById(+id);
        return p;
    }

    actualizarPersona(id: number, persona: PersonaDTO): PersonaDTO{
        this.personaRepository.update(id, persona);
        return persona;
    }

    eliminarPersona(id: number): string{
        this.personaRepository.delete(id);
        return "Persona eliminada con id: "+id;
    }


}
