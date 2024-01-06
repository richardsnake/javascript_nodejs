

/*console.log(fetch("https://google.com.pe"))
console.log("antes del fetch")
fetch("https://google.com")
    .then(response => {return response.text()})
    .catch(error => {console.log("hay errores: " ,error)})
    .then(data => {console.log("mostrando data: ", data)})
    .finally(()=>{console.log("se termino la promesa")});
console.log("despues del fetch")x


console.log("antes del fetch await");
const response = await fetch("https://google.com");
const data =  await response.text();
console.log(data)
console.log("despues del fetch await")*/

async function ejectarFetch(url){
    const response = await fetch(url);
    const data =  await response.text();
    return data;
}

console.log("antes del ejecutarfetch async");
const datos = await ejectarFetch("https://google.com");
console.log(datos)
console.log("despues del ejecutarfetch async");