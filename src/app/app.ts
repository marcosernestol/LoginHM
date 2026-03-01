
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LoginHM');

  constructor() {

    alert('LoginHM');

  }
}



'use strict' // Para que se use la notación estrícta


// La opción > ng serve -o   (Funciona solo para un proyecto ANGULAR, Desde una terminal “node” o “cmd”)
// Pero Para DESARROLLO ( en proyectos que no usan ANGULAR), 
//      Está muy padre la librería "LIVE SERVER" - una vez instalada solo presionar opción "Go Live"

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{

   console.log("Inicio OK, Pagina Inicial");
   alert('LoginHM !!!!');         // ALERTA

// XXXXXXXXXXXX   CON ESTO ESTARIA CONSULTANDO UN PRIMER WS .....   ( Apoco SI TILIN !!! ???  )   XXXXXXXXXXXXXXXXXX
// xxxxxxxxxxxxx    ASI DE SIMPLE ,  CONSULTANDO MI PRIMER WS ,   POR FIN !!!! SI FUNCIONÓ !!!   XXXXXXXXXXXXXXXXXX
    var usuarios_desde_WS_RegistroPersonas = []; 
    fetch('http://localhost:5999/api/RegistroPersona')
    .then(data =>  data.json())
    .then(data => {
                    usuarios_desde_WS_RegistroPersonas = data.RegistroPersona;
                    console.log(usuarios_desde_WS_RegistroPersonas);
                    console.table(usuarios_desde_WS_RegistroPersonas);
                    console.log({usuarios_desde_WS_RegistroPersonas});
                  })
    .catch( error => {console.log('8888888 >> melb mi error >> ' + error);
                    alert('Se Presentó un Error en mi primer Fetch');});
// aqui termina la consulta al WS , así de simple.



// Primero Obtenemos el objeto del formulario
var miFormulario = document.querySelector("#primerFormulario");


// Luego generamos un evento 
 miFormulario.addEventListener('submit',function(){
    console.log("Entra Submit");

    var varNombreUnico = document.querySelector("#inputNombreUnico").value;
    var varCorreoElectronico = document.querySelector("#inputCorreoElectronico").value;
    var varPassword = document.querySelector("#inputPassword").value;
  

     // En estas variables se capturan los datos y lo comprobaremos asi:
     console.log(varNombreUnico , varCorreoElectronico, varPassword );

        // AHORA VAMOS A VALIDAR los datos de entrada, por ejemplo :
        // Que el campo se llene y NO esté vacío y que NO tenga espacios al inicio y fin
     
        // Con el siguiente if es fácil de validar y No nos deja pasar hasta que el dato dea válido
        if(varNombreUnico.trim() == null || varNombreUnico.trim().length == 0){
			alert("El NombreUnico no es válido");
                document.querySelector("#errorNombreUnico").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorNombreUnico").style.display = "none" ;
        }


        if(varCorreoElectronico.trim() == null || varCorreoElectronico.trim().length == 0){
            alert("El CorreoElectrónico no es válido");
            document.querySelector("#errorCorreoElectronico").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorCorreoElectronico").style.display = "none" ;
        }


        if(varPassword.trim() == null || varPassword.trim().length == 0){
            alert("El Password no es válido");
            document.querySelector("#errorPassword").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorPassword").style.display = "none" ;
        }

 }); 



});  // Se cierra el evento 'load'