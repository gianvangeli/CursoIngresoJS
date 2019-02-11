function mostrar()
{
//tomo la edad  
var laEdad;

laEdad = edad.value;
laEdad= parseInt(laEdad);

if (! (laEdad >12 && laEdad <18))
{
	alert ("Usted No es un adolecente");
}

//Ultizando ||(No)

if (laEdad <13 || laEdad >17)

{
	alert ("Usted No es un adolecente");
}


}//FIN DE LA FUNCIÓN