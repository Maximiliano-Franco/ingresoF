/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let marcaMasCara;
  let marcaMasBarata;
  let peso;
  let pesoTotal = 0;
  let precio;
  let precioMasCaro = 0;
  let precioMasBarato = Infinity;
  let seguir;
  let tipo;


  // Utilizo "do while" para que al menos se ejecute una vez

  do{
		
		// Pido datos por "prompt" y realizo las validaciones de los mismos

		marca = prompt("Ingrese la marca del producto").toLowerCase();

			  while (marca == ""){
				  marca = prompt("Error, esa no es una marca valida. Ingrese la marca del producto");
        }


		precio = parseFloat(prompt("Ingrese el precio del producto"));
			
			  while (precio <= 0 || isNaN(precio)){
			    precio = parseFloat(prompt("Error, ese no es un precio valido. Ingrese el precio del producto"));
			  }


		peso = parseFloat(prompt("Ingrese el peso del producto en Kg."));

			  while (peso <= 0 || isNaN(peso)){
				  peso = parseFloat(prompt("Error, ese no es un peso valido. Ingrese el peso del producto en Kg."));
        }
        

        // Aplico contador para sumar el peso

        pesoTotal += peso;

		tipo = prompt("Ingrese el tipo de producto (solido o liquido)").toLowerCase();

			  while (tipo != "solido" && tipo != "liquido"){
				  tipo = prompt("Error. Ingrese el tipo de producto (solido o liquido)");
        }

        // Utilizo "if else if" para reemplazar variables si se cumplen sus condiciones
        
        if(tipo == "liquido" && precio > precioMasCaro){
          precioMasCaro = precio;
          marcaMasCara = marca;
        } 
        
        else if(tipo == "solido" && precio < precioMasBarato){
          precioMasBarato = precio;
          marcaMasBarata = marca;
        }
 

    seguir = prompt("Desea ingresar otro producto? Ingrese 'S' o 'N'").toLowerCase();

} while (seguir == "s")


alert(`A) El peso total de la compra es de: ${pesoTotal} kg. \n
      B) La marca más cara de los líquidos es ${marcaMasCara} \n
      C) La marca más barata de los solidos es ${marcaMasBarata}.`)

}