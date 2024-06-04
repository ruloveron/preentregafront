import { insertCard } from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    // al arrancar el index.html, cuando el dom se termine de cargar se ejecuta 
    // lo siguiente:
  
    // comprueba si en el localStorage existe una propiedad llamada userActive si no 
    // existe significa que el usuario no se ha logueado y entonces lo redirige a la 
    // pagina de login
    // if (localStorage.getItem("userActive") !== "true") {
    //   window.location.href = "/resources/pages/login.html";
    // }
  
    // // acá se busca el boton de logout y se le coloca un escuchador de eventos
    // // al boton para que cuando se haga click, el valor de userActive en el localStorage
    // // se vuelva false para impedir se carguen las tarjetas
    // const logoutButton = document.getElementById("logoutButton");
    // logoutButton.addEventListener("click", () => {
    //   localStorage.setItem("userActive", false);
    //   alert("Usuario cerró sesión.");
  
    //   window.location.href = "/resources/pages/login.html";
    // });
  
    // solo en el caso que el userActive en el localStorage se encuentre en true
    // se ejecuta el codigo a continuación
    let astros;
  
    async function cargarDatos() {
      const response = await fetch('./resources/data/data.json');
      astros = await response.json();
      mostrarEnPantalla(astros);
    }
  
    cargarDatos()

    function mostrarEnPantalla(astros){
      astros.forEach(insertCard);
    }
});