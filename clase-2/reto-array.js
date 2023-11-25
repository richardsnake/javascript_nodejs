
var arreglo = [1,9,5,13,-4,10,7,20,0,-1];

console.log(arreglo);
var mayor = -99999;
var menor = 99999;
for(let i of arreglo)
{
    console.log(i);
    if(i> mayor)
        mayor=i;
    if(i<menor)
        menor = i;
}

console.log("El mayor valor del arreglo es: "+mayor);
console.log("El menor valor del arreglo es: "+menor);

