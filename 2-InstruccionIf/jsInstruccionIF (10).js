function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota; 
	nota = Math.floor((Math.random() * 10) + 1);

	if (nota <4 || nota >8)
	{
		if (nota <4)
		{
			alert ("La nota es"+nota+"Vamos,la proxima se puede");
		}
		if (nota >8)
		{
			alert ("LA nota es"+nota+"EXCELENTE");
		}
	}
	else
	{
		alert ("La nota es"+nota+"APROBO");
	}









	

}//FIN DE LA FUNCIÓN