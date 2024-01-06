import { Length, Min, Max, IsDate, IsEmail, IsPhoneNumber, validate, isMobilePhone } from "class-validator"

class Persona {
    @Length(2,10)
    nombre: string;
    @Length(2, 20)
    apellido: string;
    @Min(1)
    @Max(99)
    edad: number;
    @IsDate()
    fecha_nacimiento: Date;
    @IsEmail()
    email: string;
    @IsPhoneNumber("PE")
    celular: string;

}

var p = new Persona();
p.nombre = "Richard";
p.apellido = "A";
p.edad =36;
p.fecha_nacimiento = new Date("04/11/1987");
p.email = "abanto4@gmail.com";
p.celular = "987273804";
console.log("antes del validate")
validate(p).then( errors=>{
    if(errors.length>0){
        console.log("Hay errores de validacion", errors);
    }
    else{
        console.log("No hay errores");
    }
});
console.log("despues del validate")
