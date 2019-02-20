function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt ("Ingrese el precio");
    descuento = prompt ("Ingrese el descuento");

    precioFinal = precio * (1-descuento/100);
    elPrecioFinal.value =precioFinal;

    







}
