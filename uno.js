/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{	

	// Declaro las variables 

	let contMujeres = 0;
	let edad;
	let edadContador = 0;
	let edadPromedio;
	let nombre;
	let nombreHombreMasPesado;
	let peso;
	let pesoHombreMasPesado = 0;
	let sexo;


	// Utilizo el "for" para iterar la cantidad de veces que se me pide

	for (let i = 0; i<5; i++){

	
		// Pido datos por prompt y realizo las validaciones de los mismos

		nombre = prompt("Ingrese el nombre del paciente").toLowerCase();
			while (!(isNaN(nombre))){
				nombre = prompt("Error, eso no es un nombre. Ingrese el nombre del paciente");
			}


		edad = parseInt(prompt("Ingrese la edad del paciente"));
			
			while (edad < 1 || edad >= 120 || isNaN(edad)){
				edad = parseInt(prompt("Error, esa edad no es valida. Ingrese una edad valida"));
			}
			

			// Aplico contador para sumar las edades

			edadContador += edad;


		sexo = prompt("Ingrese el sexo del paciente ('F' o 'M')").toLowerCase();

			while (sexo != 'f' && sexo != 'm'){
				sexo = prompt("Error, ese no es un sexo valido. Ingrese el sexo del paciente ('F' o 'M')");
			}
			

			// Utilizo "if" para sumar la cantidad de mujeres ingresadas con un contador

			if(sexo == 'f'){
				contMujeres++;
			} 

		peso = parseFloat(prompt("Ingrese el peso del paciente"));
			
			while (peso <= 0 && peso > 500){
				peso = parseFloat(prompt("Error, ese peso es invalido. Ingrese el peso del paciente"));
			}


			/* Utilizo "if" con la condicion de que si es hombre y si su peso supera al mayor registrado, este lo reemplace
				y guarde su nombre en una variable*/

			if(sexo == 'm' && peso > pesoHombreMasPesado){
				pesoHombreMasPesado = peso;
				nombreHombreMasPesado = nombre;
			}
	}


	// Saco promedio 

	edadPromedio = (edadContador / 5);

	console.log(`\n 
				A) La cantidad de mujeres es ${contMujeres} \n
				B) La edad promedio en total es de ${edadPromedio} años \n
				C) El hombre mas pesado es ${nombreHombreMasPesado} con ${pesoHombreMasPesado} kilos`);

}
