let richard = {
    nombre: "Richard",
    apellido: "Abanto",
    edad: 36,
    sexo: 'M',
    masculito : true,
    femenino :false,
    nombreCompleto : function(){
        return this.nombre + " "+this.apellido;
    }
    
};

console.log(richard.nombreCompleto());

class Persona{
    nombre;
    apellido;
    direccion;
    fechaNacimiento;

    constructor(nombre, apellido, direccion, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
    }

    saludar() {
        return "hola";
    }
}

for(propiedad in richard){
    console.log(richard[propiedad]);
}

let p1 = new Persona("Heberth", "Deza", "Guadalue", "27/09/1988");
console.log(p1);

console.log(p1.nombre);
console.log(p1["nombre"]);

console.log(richard.nombre);
console.log(richard["nombre"]);
