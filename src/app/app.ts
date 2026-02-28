// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('LoginHM');

//   constructor() {

//     alert('HOLA MUNDO !!!!');         // ALERTA
//     console.log('HOLA MUNDO !!!!');
//   }
// }



'use strict' // Para que se use la notación estrícta

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{


  var caja = document.getElementById("mi_caja"); // Para seleccional el elemento HTML por su ID
   console.log(caja);

   caja.style.background = "red";
   caja.style.padding = "20px";
   caja.style.color = "white";
   caja.style.overflow = "scroll"; // Para poner el Scroll

  var cajaContenido = document.getElementById("mi_caja").innerHTML;  // o el contenido
   console.log(cajaContenido);

   cajaContenido = cajaContenido + "<br> <h1> JA !! </h1>" ;
   caja.innerHTML = cajaContenido ;



  // Lo más básico
      alert('Hola Marcos');         // ALERTTA
      console.log( 'Hola Mundo');   // Imprime en consola

     var mi_resultado = confirm("¿Estas seguro de querer continuar?"); // CONFIRMACIÓN
         console.log(mi_resultado);
     var mi_resultado = prompt("¿Que edad tienes?", 18);  // INGRESO DATOS
         console.log(typeof mi_resultado);

     var numero = parseInt(prompt('Introduce un numero', 0));
         console.log(typeof numero);


  // VARIABLES y Tipos de datos
   var vTexto = "México";
   var vNumero = 2024;
   console.log( vTexto , vNumero , vTexto + ' -> ' + vNumero );

  var numero_entero = 44;
  var cadena_texto = 'Hola "que" tal';
  var verdadero_o_falso = false;
  var numero_flotante = "33.4";

  console.log(typeof numero_entero);
  console.log(typeof cadena_texto);
  console.log(typeof verdadero_o_falso);
  console.log(typeof numero_flotante);

// Constantes
// Como una variable, pero su valor no puede cambiar
   var web = "https://victorroblesweb.es";
   const ip = "192.88.0.12";
   web = "https://victorroblescursos.es";
   console.log(web, ip);



// CONDICIONALES  -   IF
  /*	Mayor: >
	  Menor: <
	  Mayor o igual: >=
	  Menor o igual: <=
	  Igual: ==
	  Distinto: !=
  */

var edad = 54;
var nombre = 'David Suarez';


if(edad >= 18 ){
	// Es mayor de edad
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");

	if(edad <= 33){
		console.log('Todavia eres millenial');
	}else if(edad >= 70){
		console.log('Eres anciano');
	}else{
		console.log('Ya no eres millenial');
	}

}else{
	// Es menor de edad
	console.log(nombre+" tiene "+edad+" años, es MENOR de edad");
}


 /*
  Operadores lógicos
  AND(Y): &&
  OR(O): ||
  Negación: !
 */

var year = 2024;

// Negación
if(year != 2016){
	console.log("El año no es 2016 realmente es: "+year);
}

// AND
if(year >= 2000 && year <= 2020){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}

// OR
if(year == 2024 || (year >= 2018 && year == 2024)){
	console.log("El año acaba en 4");
}else{
	console.log("AÑO NO REGISTRADO");
}


// Switch

var edad = 40;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "Crisis de los cuarenta";
	break;
	case 75:
		imprime = "Eres ya un anciano";
	break;
	default:
		imprime = "Tu edad es neutra";
	break;
}
console.log(imprime);


// Bucle FOR
// Bucle es una estructura de control que se repite varias veces
var numero = 3;
for(var i = 0; i <= numero; i++){
	console.log("Vamos por el numero: "+i);
	// debugger;
}



// Do while
var years = 30;
do{
	alert("SALE CUANDO SEA DIFERENTE A 25, vamos en " + years);
	years--;
}while(years > 25)



// Bucle while
var year = 2028;
while(year != 2022){

	// ejecuta esto
	console.log("Estamos en el año: "+year);
	if(year == 2024){
		break;
	}
	year--;
}



// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicacion: " + (numero1*numero2));
	console.log("División: " + (numero1/numero2));
	console.log("***********************************");
}

function porPantalla(numero1, numero2){
	// SI FUNCIONA EL document.write  - Solo que escribe en todo el DOM ( segun yo )
	 document.write("Suma: " + (numero1+numero2)+"<br/>");
	 document.write("Resta: " + (numero1-numero2)+"<br/>");
	 document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
	 document.write("División: " + (numero1/numero2)+"<br/>");
	 document.write("***********************************"+"<br/>");
}

function calculadora(numero1, numero2, mostrar = false){
	if(mostrar == false){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}

	return true;
}

calculadora(1, 4);
calculadora(2, 5, false); // OJO, si le paso true, entonces imprimirá en Pantalla
                          // o sea: imprime en el documento HTML y desaparece todo



// Parametros REST y SPREAD
// El parámetro REST se utiiza cuando NO SAMEBOS CUANTOS PARÁMETROS VAN A LLEGAR
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");
// El parámetro SPREAD se utiliza al mandar parámetros
// es como decir TODOS los elementos de un arreglo pasalos uno a uno como parámetros
var frutas = ["Naranja", "Manzana"];
listadoFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco");







     // +++++++++++++++++++ Importantísimo Inicia ++++++++++++++++


// Funciones anonimas  y CallBacks
// Una funcion anónima es una función que no tiene nombre
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}
// Un CallBack es una Funcion anónima QUE SE PASA COMO PARÁMETRO a otra función. Aqui se pasan 2 funciones como parámetros
sumame( 2 , 3 , function(dato){console.log("Suma :", dato);}  , function(dato){console.log("Suma x 2 =", (dato*2)); }  );

// Es muy común que un CallBack se Utilice como FUNCION DE FLECHA, así que la llamada anterior se puede reescribir así:
sumame( 4 , 5 , (dato) => {console.log("Suma :", dato);}  , (dato)=>{console.log("Suma x 2 =", (dato*2)); }  );

// Incluso al llamar al CallBack se pueden omitir los paréntesis  así :
sumame( 6, 7 , dato=>{console.log("Suma :", dato);}  , dato=>{console.log("Suma x 2 =", (dato*2)); }  );


    // +++++++++++++++++++ Importantísimo Finaliza ++++++++++++++++







// AMBITO de las variables
function holaMundo(texto){
	var hola_mundo = "Texto dentro de función";

	console.log(texto);
	console.log(numero.toString());
	console.log(hola_mundo);

}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);




// Transformacion de textos
var numero = 444;
var texto1 = "   Bienvenido al curso de JavaScript curso de Victor Robles   ";
var texto2 = "  es muy buen curso" ;
   // En JS las variables son objetos y tienen métodos, ejemplo: valiable.ToString para convertir a Texto
   console.log( numero, texto2 , typeof numero );
   console.log( numero, texto2 , typeof numero.toString() );

   console.log( "" + numero + '  ' +  texto2  + '  ' +  typeof numero );
   console.log( '' + numero + '  ' +  texto2  + '  ' +  typeof numero.toString() );

   console.log("<<<  -----1---  >>> ")
   console.log( "Longitud   " + texto1.length ); // sirve para CONTAR incluyendo longitud de arreglos
   console.log( texto1.toUpperCase() ); // a matusculas
   console.log( texto1.toLowerCase() ); // a minusculas
   texto2 = texto2.concat("   -   ", texto2 , texto1 );
   console.log( texto2);
   texto1 = texto1.trim(); // quita espacios en blanco al inicio y fin de la cadena
   console.log(texto1);
   console.log("<<<  -----2---  >>> ");




//Metodos de  Busquedas
// puedo buscar una palabra dentro de una cadena de la siguiente forma
var busqueda = texto1.indexOf("curso");
console.log(busqueda); // Si es que encuentra la palabra "curso" me regresa la posición de donde empieza dicha palabra
busqueda = texto1.lastIndexOf("de");
console.log(busqueda); // me regresa la ultima aparición de la paladra "de"
busqueda = texto1.search("curso"); // es lo mismo que usar indexOf
console.log(busqueda);
busqueda = texto1.match("de"); // regresa un objeto ,indicando dónde está la coincidencia
console.log(busqueda);
busqueda = texto1.match(/de/gi); // Está extraña esta forma de pasar el parámetro "de"
                                // lo pasa entre barras y posteriormente la palabra gi
								// pero me regresa un array de las coincidencias de la palabra "de" en el texto1
console.log(busqueda);
busqueda = texto1.substring(14,5); // extrae una subcadena comenzando enla posición 14 y 5 letras de largo
console.log(busqueda);
busqueda = texto1.charAt(5); // regresa específicamente la letra que hay en la posicipon 5
console.log(busqueda);
busqueda = texto1.startsWith("Victor"); // regresa true o false si el texto comienza con esa palabra
console.log(busqueda);
busqueda = texto1.endsWith("Victor"); // regresa true o false si el texto termina con esa palabra
console.log(busqueda);
busqueda = texto1.includes("JavaScripts"); // regresa true o false si el texto contiene esa palabra
console.log(busqueda);


// Funciones de reemplazo
busqueda = texto1.replace("JavaScripts","MapInfo"); // reemplaza la primer palabra por la segunda
console.log(busqueda);
busqueda = texto1.slice(14); // divide el texto a partir de caracter 14
console.log(busqueda);

busqueda = texto1.split(" "); // divide en un array , utilizando el separador de espacio ( aqui separaria por palabras)
console.log(busqueda);




// Plantillas de texto ( Dice que es nuevo en JavaScript )

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

// para Utilizar una plantilla  en lugar de comillas simples o dobles se utiliza la COMILLA INVERTIDA ``
// y con el signo de pesosy las llaves se INTERPOLAN las variables dentro dle texto HTLM
var texto = `
	<h1>Hola que tal</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mis apellidos son: ${apellidos}</h3>
	<br/>
`;


var caja = document.getElementById("mi_caja"); // Para seleccional el elemento HTML por su ID
var cajaContenido = document.getElementById("mi_caja").innerHTML;  // o el contenido
cajaContenido = cajaContenido + texto ;
caja.innerHTML = cajaContenido ;

// document.write(texto);  // OJO, imprime en el documento HTML y desaparece todo
alert(texto); // No funcionó con el alert.




// MANEJO DE:   Arrays, Arreglos o Matrices
// Hay 2 formas de declarar un arreglo y son las siguientes:
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true]; // OJO: en JS un array acepta valores de sualquier tipo
var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

    // Cómo acceder a un elemento en específico
    var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
		if(elemento >= nombres.length){
			alert("Introduce el numero correcto menor que " + nombres.length); // para saber la longitud de un array podemos usar .length Como ya se había comentado
		}else{
			alert("El usuario seleccionado es: "+nombres[elemento]);
		}


var caja = document.getElementById("mi_caja");
// FORMAS DE RECORRER UN ARREGLO
// ESTA ES UNA FORMA DE RECORRER UN ARCHIVO: (Primer forma)
caja.innerHTML = document.getElementById("mi_caja").innerHTML +  "<ul>" ;
for(var i = 0; i < lenguajes.length; i++){

  // document.write("<li> Primer For  "+lenguajes[i]+"</li>");  // Si funciona, pero escribe en el DOM
  // Trataré de reemplazar el   document.write con esta otra instruccion para que imprima en la caja en lugar del DOM
  caja.innerHTML = document.getElementById("mi_caja").innerHTML + "<li> Primer For  "+lenguajes[i]+"</li>" ;  // SI funcionó
}
 // document.write("</ul>");





// ESTA ES UNA SEGUNDA FORMA DE RECORRER UN ARCHIVO: (Segunda forma), UTILIZANDO forEach y una funcion de CallBack
// Dicha funcion tiene 3 parámetros "elemento" , "incdice" y el "arreglo original que le pasamos"
// OJO; los nombres de los parametros pueden ser cuaquiera y SOLO EL PRIMER PARAMETRO es obligatorio)
// El indice y arreglo solo se utilizan si fuera necesario "MOSTRAR" alguno de esos elementos
var caja = document.getElementById("mi_caja");
caja.innerHTML = document.getElementById("mi_caja").innerHTML +  "<ul>" ;
lenguajes.forEach((elemento, indice, elArreglo )=>{
	console.log(elArreglo);

	 // document.write("<li> Segundo For  "+indice+" - "+elemento+"</li>"); // Si funciona pero escribe en el DOM
     // Trataré de escribir en la caja, en lugar del DOM
	  caja.innerHTML = document.getElementById("mi_caja").innerHTML + "<li> Segundo For "+indice+" - "+elemento+"</li>" ;  // SI funcionó
 });
 caja.innerHTML = document.getElementById("mi_caja").innerHTML +  "</ul><br>" ;



// Como se comentó los 2 ultimos parámetros son opcionales ( si no se usan) , así que pudo haber quedado así:
caja.innerHTML = document.getElementById("mi_caja").innerHTML +  "<ul>" ;
lenguajes.forEach((elemento )=>{
 	// document.write("<li> Segundo For (forma corta) " + elemento+"</li>");  // SI funciona pero escribe en el DOM
	// Trataré de escribir en la caja, en lugar del DOM
	  caja.innerHTML = document.getElementById("mi_caja").innerHTML + "<li> Segundo For (forma corta) " + elemento+"</li>" ;  // SI funcionó
 });
 caja.innerHTML = document.getElementById("mi_caja").innerHTML +  "</ul><br>" ;







// Y ESTA ES UNA TERCER FORMA , para recorrer un Arreglo llamada FOR-IN ( Tercer Forma , es la mas usada )
caja.innerHTML = document.getElementById("mi_caja").innerHTML +  "<ul>" ;
for(let lenguaje in lenguajes){
	// document.write("<li> Tercer For  "+lenguajes[lenguaje]+"</li>"); // en este caso "lenguaje" es un INDICE y se va incrementando 1 a 1
	caja.innerHTML = document.getElementById("mi_caja").innerHTML + "<li> Tercer For  "+lenguajes[lenguaje]+"</li>" ;  // SI funcionó

	// Si utilizamos la Palabra reservada "debugger", el programa hace pausa para debugear
	   // debugger
}

caja.innerHTML = document.getElementById("mi_caja").innerHTML +  "</ul><br>" ;
console.log(caja.innerHTML);







// ARREGLOS MULTIDIMENSIONALES
var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];


console.log("<<<  -----3---  >>> ");
console.log(peliculas);

var cine = [categorias, peliculas]; // Este es un arreglo de 2 arreglos ( o sea multidimensional)

 console.log(cine[0][1]);
 console.log(cine[1][2]);


// ORDENANDO ELEMENTOS DENTRO DE LOS ARREGLOS
console.log(peliculas.reverse()); // Ordena el arreglo de forma Inversa
console.log(peliculas.sort()); // Ordena el arreglo de forma Alfabetica
debugger;

// OPERACIONES CON ARRAYS
peliculas.push("Batman")  ; // Agrega un elemento al array

var elemento = "";
do{
	elemento = prompt("Introduce tu pelicula (hasta que pongas la palabra FIN ):");
	peliculas.push(elemento);
}while(elemento != "FIN" );

console.log(peliculas); // Ordena el arreglo de forma Inversa


// Para eliminar la última película se puede utilizar el método pop(), así:
peliculas.pop(); // Y esto elimina el último elemento del array


// Pero si quisiera eliminar algun elemento específico del array, primero tendria que buscar el índice con .indexOf
var indice = peliculas.indexOf('Gran torino'); // Con esto busco el ïndice de la pelicula "Gran torino"
if(indice > -1){
	peliculas.splice(indice, 1); // Y con esto lo ELIMINO (a partir de ese índice)
								 // tantos elementos como indique el 2do parametro ( en este caso solo 1 elemento)
}


// Y ESTO ES SUPER UTILIZADO, para CONVERTIR UN ARRAY A TEXTO. ( pero se tienen que asignar a una variable )
var peliculas_string = peliculas.join();
console.log(peliculas_string ); // Esto me regresa una cadena de texto separada por comas ( hecha con cada elemento del array)

// Y esto CONVIERTE UN STRING SEPARADO POR COMAS  en un ARREGLO
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);




// BUSCAR DENTRO DE UN ARRAY
console.log("<<<  ----- 4 ---  >>> ");
console.log(lenguajes);  // Este es el arreglo que vamos a estar analizando
var busqueda = lenguajes.find(function(lenguaje){ return lenguaje == "JS"});  // La idea de este código es que
console.log(busqueda);  // Si Dentro del arreglo de lenguajes , se encuentra el elemento "JS" ; ENTONCES lo imprime

    // esta misma funcion anterior se puede REDUCIR en su definición si se utiliza una Notación de FLECHA , así:
	// quitamos la palabra function y ponemos flecha, quitamos paréntesis,  y listo
var busqueda = lenguajes.find( lenguaje=>{  return lenguaje == "JS"});  // La idea de este código es que
	console.log(busqueda);  // Si Dentro del arreglo de lenguajes , se encuentra el elemento "JS" ; ENTONCES lo imprime

// con findIndex Se puede buscar el INDICE , o sea la posición del elemento dentro del array donde se encuentra el elemento a buscar
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");
console.log(busqueda);  // Si Dentro del arreglo de lenguajes , se encuentra el elemento "JS" ; ENTONCES lo imprime


// Otro metodo interesante es "some";  Si tuvieramos un Array numérico, se podría utilizar una "expresión"
// y determinar si alguno de los elementos cumple la condición ( y regresaría TRUE o FALSE )
// Por ejemplo: el siguiente código busca si en la lista de precios hay uno  Menor a 10
// De cumplirse la condición retorna TRUE de lo contrario retornaría FALSE.
var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio < 10);
console.log(busqueda);




 });  // Se cierra el evento 'load'
