function mostrar()
{
//tomo la edad  
var laEdad;

laEdad = edad.value;
laEdad= parseInt(laEdad);

if(laEdad>18)
{
	alert ("Ustes es mayor de edad");
}else
{
	if (laEdad<13)
	{
		alert ("Usted es niño/a");
	}
	else
	{
		alert ("Usted es un adolecente");
	}
}


}//FIN DE LA FUNCIÓN