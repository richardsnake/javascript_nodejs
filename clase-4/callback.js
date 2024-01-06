

function saludar(){
    console.log("Hola mundo");
}

console.log("antes de ejecutar el setTimeout")
setTimeout(saludar, 5000);
console.log("despues de ejecutar el setTimeout")
setTimeout(()=>{
    console.log("hola desde settimeout")
}, 3000);
console.log("despues de ejecutar el setTimeout2")

function sayHello(){
    console.log("hello")
}

function saludar2(saludo, func_saluda_ingles){
    console.log(saludo);
    func_saluda_ingles();
}

saludar2("hola", sayHello);