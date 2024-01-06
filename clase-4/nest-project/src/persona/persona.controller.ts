import { Controller, Get, Param, Post, Patch, Body, Delete, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { PersonaService } from "./persona.service";
import { PersonaDTO } from './dtos/persona.dto';
import { ApiTags, ApiBody, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('Persona')
@Controller('persona')
export class PersonaController {

    constructor(private readonly personaService: PersonaService) {}


    @Get()
    @ApiOperation({summary: "Obtiene la lista de todas las personas"})
    obtenerPersonas(){
        return this.personaService.obtenerPersonas()
    }

    @Get(':id')
    @ApiOperation({summary: "Obtiene un entidad de personas basado en su ID como parametro"})
    @ApiResponse({status: 200, description: "Se obtuvo los datos de la persona", type: PersonaDTO})
    @ApiResponse({status: 404, description: "El id indicado de la entidad persona no existe"})
    async obtenerPersona(@Param("id") id: string){
        let p = null;
        p = await  this.personaService.obtenerPersonaById(+id);
        console.log(p);
        if (p == null || p == undefined){
            throw new NotFoundException("El id indicado de la entidad persona no existe");    
        }
        return p;
    }

    @Post()
    @ApiOperation({summary: "Crea una nueva entidad de personas"})
    @ApiBody({
        type: PersonaDTO,
        description: "Estructura JSON de una persona",
    })
    @ApiResponse({status: 201, description: "Se ha creado una persona", type: PersonaDTO})
    @ApiResponse({status: 500, description: "Ha ocurrido un error interno, intentelo mas tarde"})
    @ApiResponse({status: 404, description: "no se ha encontrado la persona"})
    async crearPersona(@Body() persona: PersonaDTO){
        return   await this.personaService.createPersona(persona);
    }

    @ApiOperation({summary: "Actualiza una entidad de personas ya existente con su id como parametro"})
    @ApiBody({
        type: PersonaDTO,
        description: "Estructura JSON de una persona",
    })
    @Patch(":id")
    actualizarPersona(@Param("id")id: string, @Body()persona: PersonaDTO){
        return this.personaService.actualizarPersona(+id, persona);
    }

    @ApiOperation({summary: "Elimina una entidad de personas ya existente con su id como parametro"})
    @Delete(":id")
    eliminarPersona(@Param("id") id: string){
        return this.personaService.eliminarPersona(+id);
    }

}
