let impar = "";
let i = 1;

function ciclowhile(objeto)
{
    let numero = parseInt(document.formulario.caja.value);
    if(Number.isInteger(numero))
    while(i<=numero)
    {
        if(i%2!==0)
        {
            impar = impar + i + ",";
        }
        i = i+1;
        
    }
    document.formulario.respuesta.value = impar;
} 