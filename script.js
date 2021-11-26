// establecer el valor inicial en cero
let contador = 0;
//  seleccionar valor y botones
//const numero = document.querySelector("#numero"); OTRA MANERA DE CODIFICARLO.
const numero = document.getElementById("numero");
const clasesBotones = document.querySelectorAll(".btn");
clasesBotones.forEach(function (clasesBoton) {
    // console.log(clasesBoton);
    clasesBoton.addEventListener("click", function (evento) {
        //console.log(clasesBoton);
        const estilos = evento.currentTarget.classList;
        console.log(estilos)
        // [evento.target.classList] devolverá directamente la lista de nombres de clases en una matriz.
        if (estilos.contains("diminuye")) {
            contador -= 1;
            // El método contains () devuelve un valor booleano que indica si un nodo contiene  (es descendiente) de un nodo especificado. Un descendiente puede ser hijo, nieto, bisnieto, etc.
        }
        else if (estilos.contains("incrementa")) {
            contador += 1;
        }
        else {
            contador = 0;
        }

        if (contador < 0) {
            numero.style.color = "red";
        }
        if (contador > 0) {
            numero.style.color = "green"
        }
        if (contador === 0) {
            numero.style.color = "#222";
        }
        numero.textContent = contador;
    });
});
