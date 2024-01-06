import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { Persona } from './entities/Persona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Persona])],
    controllers: [PersonaController],
    providers: [PersonaService]
})
export class PersonaModule {

}
