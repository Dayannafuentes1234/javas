function diasemana()
{
    dia = parseInt(document.formulario.caja.value);
    switch(dia)
    {   
        case 1:
            document.formulario.respuesta.value = "lunes";
            break;
        case 2:
            document.formulario.respuesta.value = "martes";
            break;
        case 3:
            document.formulario.respuesta.value = "miercoles";
            break;
        case 4:
            document.formulario.respuesta.value = "jueves";
            break;
        case 5:
            document.formulario.respuesta.value = "viernes";
            break;
        case 6:
            document.formulario.respuesta.value = "sabado";
            break;
        case 7:
            document.formulario.respuesta.value = "domingo";
            break;
        default:
            document.formulario.respuesta.value = "no es un dia de la semana";
    }
}