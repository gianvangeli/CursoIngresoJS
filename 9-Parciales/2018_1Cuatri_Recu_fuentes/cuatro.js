function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var suma;

    primerNumero = prompt ("Ingrese el primer numero");
    segundoNumero = prompt ("Ingrese el segundo numero");

    if (primerNumero == segundoNumero)
    {
        alert (primerNumero + segundoNumero);
    }

    primerNumero = parseInt (primerNumero);
    segundoNumero = parseInt (segundoNumero);

    if (primerNumero > segundoNumero)
    {
        suma = primerNumero / segundoNumero;
        alert ("La division es"+suma);
    }
    if (primerNumero < segundoNumero)
    {
        suma = primerNumero+segundoNumero;

        if (suma <50)
        {
            alert ("la suma es" +suma+"y es menor a 50");

        }
        else
        {
            alert ("La suma es:"+suma);
        }

    }











}
