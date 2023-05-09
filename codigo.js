const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn"); //crea un arreglo

botones.forEach((boton) => { //navegamos el arreglo de "botones"
  boton.addEventListener("click", () => { //"escucha" a los botones cuando se los clickea y mueve sus valores a la variable
    const botonApretado = boton.textContent;

    if (boton.id === "C") { //si borra todo el display con C vuelve a 0
      pantalla.textContent = "0";
      return;
    } else if (boton.id === "del") { //si borra de a un caracter
      if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
        pantalla.textContent = "0";
        return;
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
        return;
      }
    } else if (boton.id === "igual") { //comienza la operacion
      try { //prueba hacer la cuenta
        pantalla.textContent = eval(pantalla.textContent); //eval=  evalúa la expresión de cadena y devuelve su valor
      } catch { //si no se puede arroja error
        pantalla.textContent = "Error"
      }
      return;
    } 

    if (pantalla.textContent === "0" || pantalla.textContent === "Error" ) {
      pantalla.textContent = botonApretado; 
    } else {
      pantalla.textContent += botonApretado;
    } //escribe los digitos guardados en los botones, borrando el 0 inicial en caso que este
  });
});
