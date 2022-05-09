let pares ="";

function ciclofor()
{
    let numero = parseInt(document.formulario.caja.value);
    if(Number.isInteger(numero))
    {
        for(i=1; i<numero;i++)
    {
        if(i%2==0)
        {
            if(i!=numero)
            {
                pares = pares + i + " , ";
            }
            else
            {
                pares = pares + i;
            }
        }
    }
    document.formulario.pares.value = pares;
    pares = "";
   } 
   else
   {
    alert("Debe digitar un número entero")
   }
}