const validator = {
  
 // Función validar
  isValid:function(creditCardNumber) {
    const arrayRevertido = [...creditCardNumber].reverse(); 
    console.log(arrayRevertido);

    let arrayPares = arrayRevertido.filter((elemento,i)=> i % 2!=0); // 
    let arrayImpares = arrayRevertido.filter((elemento,i) => i % 2==0); // 
    //console.log(arrayPares);
    console.log(arrayImpares);

    let sumaNuevosPares = 0;
    let sumaNuevosImpares = 0;
    let devuelve;

   // Para recorrer mi array pares y realizar las operaciones
   for (let i = 0 ; i < arrayPares.length ; i++ ) {  //cada que termina el ciclo el i vale 1+ - i=posición del ciclo
       let convertirString = parseInt (arrayPares[i]); //Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
       let nuevosPares = convertirString*2;
       //console.log(nuevosPares);
          if (nuevosPares >= 10) {
              nuevosPares = nuevosPares-9;
           }
         sumaNuevosPares = sumaNuevosPares + nuevosPares;
   }
   //console.log(sumaNuevosPares);

   // Para recorrer mi array impares y realizar la operación
   for (let i = 0 ; i < arrayImpares.length ; i++ ){
        sumaNuevosImpares = sumaNuevosImpares + parseInt (arrayImpares[i]);
    }
    //console.log(sumaNuevosImpares);

   let totalSuma = sumaNuevosPares + sumaNuevosImpares;
     if (totalSuma % 10 == 0){
       devuelve = true;
       
      }
     else {
       devuelve = false;
     }

    return devuelve;
    //console.log(devuelve);
    
  } ,
 
  //Función maskify
 

  maskify:function(creditCardNumber){
  //console.log (creditCardNumber);  
  let totalEnmascarado;
  let enmascarar = [];

  let separar = creditCardNumber.split ("");
  separar.forEach((elemento , i) => {
   if (i < separar.length - 4) {
     elemento = "#";
     //console.log(elemento);
   }
   
   enmascarar.push(elemento);
   //console.log(enmascarar);
   totalEnmascarado = enmascarar.join ('');

 });
 //console.log (totalEnmascarado);
 return totalEnmascarado;

 
  }

}

export default validator;


//return creditCardNumber.split (' ').map ((numeros,i) => 
//i < creditCardNumber.length - 4 ? '#' : numeros). join(' ');



//var miCadena = "Hola Mundo. Cómo estás hoy?";
//var divisiones = miCadena.split(" ", 3);
//console.log(divisiones);