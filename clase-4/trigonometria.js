function seno(angulo){
    if(angulo == 0)
        return 1;
    else
        return 2;
}

function coseno(angulo)
{
    return 0;
}

function tangente(angulo)
{
    return Math.sqrt(2)/2
}

class Punto {
    x;
    y;
};
module.exports =  {seno, coseno, tangente, Punto}