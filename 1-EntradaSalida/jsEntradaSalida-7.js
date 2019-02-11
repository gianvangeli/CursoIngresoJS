/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
var primerNumero;
var segundoNumero;
var suma;

primernumero=numeroUno.value;
segundonumero=numeroDos.value;

primernumero=parseInt(primernumero);
segundonumero=parseInt(segundonumero);

suma = primernumero + segundonumero;

alert ("La suma es" +suma);
}

function restar()
{
	var primernumero;
	var segundonumero;
	var resta;
   
primernumero=numeroUno.value;
segundonumero=numeroDos.value;

primernumero=parseInt(primernumero);
segundonumero=parseInt(segundonumero);

resta = primernumero - segundonumero;

alert ("La resta es" +resta);
	
}

function multiplicar()
{ 

var primernumero;
var segundonumero;
var multiplicacion;

primernumero=numeroUno.value;
segundonumero=numeroDos.value;

primernumero=parseInt(primernumero);
segundonumero=parseInt(segundonumero);

multiplicacion= primernumero * segundonumero;

alert ("La multiplicacion es" +multiplicacion);

	
}

function dividir()
{
	var primernumero;
	var segundonumero;
	var divicion;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	divicion= primernumero / segundonumero;

	alert ("La divicion es" + divicion);
	
}

