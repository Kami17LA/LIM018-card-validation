const validator = {
  
 // Función validar
  isValid:function name(creditCardNumber) {
    const arrayRevertido = [...creditCardNumber].reverse(); 
    console.log(arrayRevertido);

    let arrayPares = arrayRevertido.filter(i => i % 2==0); // evaluar si es divisible entre 2
    let arrayImpares = arrayRevertido.filter(i => i % 2!=0); // evaluar si no es igual a 0
    console.log(arrayPares);
    console.log(arrayImpares);

    let sumaNuevosPares = 0;
    //let sumaNuevosImpares = 0;
    //let devuelve;

   // Para recorrer mi array pares y realizar las operaciones
   for (let i = 0 ; i < arrayPares.length ; i++ ) {  //cada que termina el ciclo el i vale 1+ - i=posición del ciclo
       let convertirString = parseInt (arrayPares[i]); //Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
       let nuevosPares = convertirString*2;
       console.log(nuevosPares);
          if (nuevosPares >= 10) {
              nuevosPares = nuevosPares-9;
           }
         sumaNuevosPares = sumaNuevosPares + nuevosPares;
   }
   console.log(sumaNuevosPares);

   // Para recorrer mi array impares y realizar la operación






  } 



}



export default validator;


