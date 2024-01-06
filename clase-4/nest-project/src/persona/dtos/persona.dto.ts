import { ApiProperty } from "@nestjs/swagger";

export class PersonaDTO{
    @ApiProperty({
        example: "45876543",
        required: true
    })
    dni: string;

    @ApiProperty({
        example: "Richard",
        required: true
    })
    name: string;
    @ApiProperty({
        example: "Abanto",
        required: true
    })
    lastname: string;
    @ApiProperty({
        example: "04/11/1987",
        required: true
    })
    birthdate: string;
    @ApiProperty({
        example: "M o F",
        required: false
    })
    sex: string
}