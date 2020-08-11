/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let cantidadPasajeros;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let contPersonasInvierno = 0;
	let contViajesInvierno = 0;
	let destino;
	let destinoFavorito;
	let MasPasajeros = 0;
	let promedioInvierno;
	let temporada;
	let sexoTitular;
	let sexoTitularMasPasajeros;

	
	// Utilizo "do while" para que al menos se ejecute una vez

	do{
		

		// Pido datos por "prompt" y realizo las validaciones de los mismos

		sexoTitular = prompt("Ingrese el sexo del titular ('Femenino' o 'Masculino')").toLowerCase();
			
			while (sexoTitular != 'femenino' && sexoTitular != 'masculino'){
				sexoTitular = prompt("Error, ese no es un sexo valido. Ingrese el sexo del titular ('Femenino' o 'Masculino')").toLowerCase();
			}	



		destino = prompt("Ingrese el destino turistico (“Bariloche”, “Cataratas” o “Salta”)").toLowerCase();

			while (destino != "bariloche" && destino != "cataratas" && destino != "salta"){
				destino = prompt("Ese no es un destino turistico. Ingrese el destino deseado (“Bariloche”, “Cataratas” o “Salta”)").toLowerCase();
			}
			

			// Utilizo switch para contar el destino mas elegido

			switch(destino){
				case "bariloche":
					contBariloche++;
					break;
					
				case "cataratas":
					contCataratas++;
					break;

				case "salta":
					contSalta++;
					break;
			}


		temporada = prompt("Ingrese la temporada en la que desea viajar (otoño, invierno, verano o primavera)").toLowerCase();

			while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
				temporada = prompt("Esa no es una temporada valida. Ingrese la temporada en la que desea viajar (otoño, invierno, verano o primavera)").toLowerCase();
			}
			

			// Utilizo "if" para el contador si se cumple la variable

			if(temporada == "invierno"){
				contViajesInvierno++;
			}


		cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"));

			while (cantidadPasajeros <= 0 || isNaN(cantidadPasajeros)){
				cantidadPasajeros = parseInt(prompt("Esa no es una cantidad valida. Ingrese la cantidad de pasajeros"));
	   		}


			// Utilizo "if" para reemplazar variable si se cumplen la condicion

			if(cantidadPasajeros > MasPasajeros){
				MasPasajeros = cantidadPasajeros;
				sexoTitularMasPasajeros = sexoTitular;
			}
			

			// Utilizo "if" para el contador si se cumplen las variables

			if(temporada == "invierno"){
				contPersonasInvierno += cantidadPasajeros;
			}
	

		seguir = prompt("Desea registrar otro viaje? Ingrese 'S' o 'N'").toLowerCase();
		

	} while (seguir == "s")


		// Establezco promedio de invierno

		promedioInvierno = (contPersonasInvierno / contViajesInvierno);


		// Establezo el destino favorito

		if(contBariloche > contSalta && contBariloche > contCataratas){
			destinoFavorito = "Bariloche";
  		} 
  		else if (contSalta > contBariloche && contSalta > contCataratas){
			destinoFavorito = "Salta";
  		}
  		else if (contCataratas > contBariloche && contCataratas > contSalta){
			destinoFavorito = "Cataratas";
  		}


 	alert (`A) El lugar mas elegido es ${destinoFavorito}\n
			B) El titular que lleva más pasajeros es de sexo ${sexoTitularMasPasajeros}\n
			C) El promedio de personas por viaje que deciden viajar en invierno es de ${promedioInvierno}`);
}
