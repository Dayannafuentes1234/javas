function numeromayor()
{
    número1 = parseInt(document.formulario.caja1.value);
    numero2 = parseInt(document.formulario.caja2.value);
    numero3 = parseInt(document.formulario.caja3.value);

    if(número1>numero2 && número1>numero3)
    {
        mayor = número1;
    }
    if(numero2>número1 && numero2>numero3)
    {
        mayor = numero3
    }
    if(numero3>número1 && numero3>numero2)
    {
        mayor = numero3;
    }
    document.formulario.caja4.value = mayor;
}