/* Jose  m 25 
   Maria f 16
   Jesus m 33
   Fer   f 81 */

	
/*
	var nombre;
	var sexo;
	var edad;
	var edadMaxima;
	var edadMinima;
	var edadMaximaFem;
	var contador;
	var cantidad;
	contador = 0;

	while(contador<4)
	{	
		contador++;	
		nombre = prompt('ingrese nombre valido');
	
		sexo = prompt("ingrese sexo valido");
		while(sexo!="m"&& sexo!="f")
		{
			sexo=prompt("ingrese sexo valido");
		}
		edad = prompt("ingrese edad");
		edad = parseInt(edad);

		while(isNan(edad)||edad<0||edad>100)
		{
			edad = prompt("ingrese edad");
			edad = parseInt(edad);

		}
		if (edad==81) 
		{	
			nombreMayor=nombre;
			

		}
		if (contador==0) 
		{
			edadMaxima=edad;
			edadMinima=edad;
			nombreMayor=nombre;
		}
		else
		{
			if (edadMaxima<edad) 
			{
				edadMaxima=edad;
				nombreMayor=nombre;
			}
			if (edadMinima>edad) 
			{
				edadMaxima=edad;
			}
			if (sexo =='f') 
			{
				if (edad>edadMaximaFem) 
				{
					edadMaximaFem=edad;
					nombreFemeninoMasViejo=nombre;
				}

			}
		}	
	}
document.write()
document.write()
document.write()

*/
function mostrar()
{

var nota;
var sexo;
var contador;
var sumadenotas;
var promediodenotas;
var notamasbaja;
var sexodelmasbajo;
var notamasalta;




contador=0;
promediodenotas=0;
sumadenotas=0;


while(contador<5)


{



nota = prompt("ingrese nota");
nota = parseInt(nota);
sexo=prompt("ingrese sexo");

sumadenotas=sumadenotas+nota;

contador=contador+1;


while(isNaN(nota)|| nota>10 || nota<0)



{



nota = prompt("reingrese nota");
nota = parseInt(nota);

}


while(sexo!="m" && sexo!="f")		
{
	sexo=prompt("ingrese sexo como m o f");

}

if(contador==1)
{
	notamasbaja=nota;
	notamasalta=nota;
}
else
{
	if(nota<notamasbaja)
	{
		notamasbaja=nota;
		sexodelmasbajo=sexo;
	}
	if(nota>notamasalta)
	{
		notamasalta=nota;

	}


}








}


promediodenotas=sumadenotas/contador;

document.write("la nota mas baja es "+notamasbaja+"<br>");
document.write("la nota mas alta es "+notamasalta+"<br>");




}



