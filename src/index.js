import validator from './validator.js';

 console.log(validator);

 // Llamar al boton
 let primerBoton = document.getElementById("boton"); //traigo a mi botón de html a js
 primerBoton.addEventListener('click',()=> {   // llamo a mi boton que ahora es: primerBoton
 let creditCardNumber = document.getElementById("numerosIniciales").value; 
 //console.log("Tú número de tarjeta es " +creditCardNumber );

 // Llamar a mi js validator - función isValid
 validator.isValid(creditCardNumber);

 console.log (creditCardNumber);
 console.log(validator.isValid(creditCardNumber));

    if (validator.isValid(creditCardNumber) == true){
       document.querySelector('#respuesta').innerHTML ="Número de tarjeta valida";
      
    }
    else {
      document.querySelector('#respuesta').innerHTML = "Número de tarjeta no valida";
      //alert ();
    }
   
 // Llamar a mi js validator - función maskify

 //console.log (validator.maskify(creditCardNumber));

 let finalEmascarado = validator.maskify(creditCardNumber);
 document.getElementById("numerosIniciales").value = finalEmascarado;


});

const cargarNuevamente = document.getElementById('volverInicio');
cargarNuevamente.addEventListener ('click' , () => location.reload ());






 //function fValidar() {
    //let almacenarNumeros;
    //almacenarNumeros= document.getElementById("numerosIniciales");
    
    //validator.isValid(almacenarNumeros);
    //if (validator.isValid(almacenarNumeros)){
    //  alert ("La tarjeta es válida");
    //}
    //else {
      //  alert ("La tarjeta no es válida");
    //}
  




 // Llamar al boton
 //let primerBoton = document.getElementById("boton"); //traigo a mi botón de html a js
 //primerBoton.addEventListener('click',()=> {   // llamo a mi boton que ahora es: primerBoton
 //let numerosTarjeta = document.getElementById("numerosIniciales").value; // hago mi función para obtener los valores de mi casilla de texto
 //alert("Tú número de tarjeta" +numerosTarjeta + "");
 //});


 // Cambiar sentido de los digitos de tarjeta
 //const Array =[numerosTarjeta]
 //console.log(Array.reverse())    


 // Obtener los valores de la casilla texto
 //let numerosTarjeta = document.getElementById("numerosIniciales").value;
 //console.log(numerosTarjeta);



 //let digitosTarjeta ='1'+'2'+'3'+'4'+'5'+'6'+'7'+'8'+'9';
 //console.log (digitosTarjeta)

 //function introducirTarjeta(){
    //var introducirTarjeta=document.getElementById("numberInicial").value;
    //}    

  