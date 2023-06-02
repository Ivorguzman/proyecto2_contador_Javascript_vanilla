let contador = 0;
/* `const numero = document.getElementById("numero");` es seleccionar el elemento HTML con el ID
"numero" y almacenarlo en una variable constante llamada `numero`. Este elemento se utiliza
posteriormente para actualizar el valor mostrado del contador. */
const numero = document.getElementById("numero");
/* `const clasesBotones = document.querySelectorAll(".btn");` está seleccionando todos los elementos
con la clase "btn" y almacenándolos en una variable constante llamada `clasesBotones`. Esto se usa
más adelante en el código para agregar detectores de eventos a cada uno de estos botones. */
const clasesBotones = document.querySelectorAll(".btn");

/* Este código agrega detectores de eventos a cada botón con la clase "btn". Recorre cada botón usando
el método `forEach` y agrega un detector de eventos de clic a cada uno. Cuando se hace clic en un
botón, comprueba la lista de clases del botón para determinar si se debe incrementar, disminuir o
restablecer el contador. Luego actualiza el valor del contador y el contenido del texto del elemento
`numero` en consecuencia. Además, cambia el color del elemento `numero` según el valor actual del
contador. */
clasesBotones.forEach(function (clasesBoton) {
  /* `clasesBoton.addEventListener("click", function (evento) {` agrega un detector de eventos de clic
  a cada botón con la clase "btn". Cuando se hace clic en un botón, se ejecuta la función dentro del
  detector de eventos. El `evento` El parámetro representa el objeto de evento de clic y se puede
  usar para acceder a información sobre el evento, como el elemento de destino. */
  clasesBoton.addEventListener("click", function (evento) {
    /* `const estilos = evento.currentTarget.classList;` está seleccionando la lista de clases del
      elemento de destino actual que activó el evento de clic y almacenándolo en una variable
      constante llamada `estilos`. Esto se usa más adelante en el código para verificar si el botón
      en el que se hizo clic tiene una clase específica (por ejemplo, "diminuye", "incrementa") para
      determinar cómo actualizar el contador. */
    const estilos = evento.currentTarget.classList;
    console.log(estilos);
    /* La sentencia `if (estilos.contains("diminuye"))` verifica si el botón actual que activó el evento
   de clic tiene una clase de "diminuye". Si lo hace, significa que el botón está destinado a
   disminuir el contador, por lo que el código dentro de la instrucción if se ejecutará y disminuirá
   la variable `contador` en 1. */
    if (estilos.contains("diminuye")) {
      contador -= 1;
      // El método contains () devuelve un valor booleano que indica si un nodo contiene  (es descendiente) de un nodo especificado. Un descendiente puede ser hijo, nieto, bisnieto, etc.
    } else if (estilos.contains("incrementa")) {
      contador += 1;
    } else {
      contador = 0;
    }

    if (contador < 0) {
      numero.style.color = "red";
    }
    if (contador > 0) {
      numero.style.color = "green";
    }
    if (contador === 0) {
      numero.style.color = "#222";
    }
    numero.textContent = contador;
  });
});
