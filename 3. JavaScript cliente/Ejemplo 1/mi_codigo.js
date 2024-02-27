<<<<<<< HEAD
const mi_boton = document.getElementById('mi_buton');
const mi_lista = document.getElementById('mi_lista');
mi_boton.addEventListener('click', presionar_boton);

let contador = 0;

const colores = ['red', 'green', 'blue'];

function presionar_boton() {
  contador++;
  mi_lista.innerHTML += '<li>Una opción ' + contador + '</li>';
  // mi_lista.style.color = colores[contador % colores.length];
  mi_lista.style['color'] = colores[contador % colores.length];
=======
const mi_buton = document.getElementById("mi_boton");
const mi_titulo = document.getElementById("mi_titulo");
const mi_buton_rojo = document.getElementById("mi_boton_rojo");
const cuerpo = document.getElementById("cuerpo");

mi_buton.addEventListener("click", boton_presionado);
mi_buton_rojo.addEventListener("click", enrojece);

function boton_presionado() {
  mi_titulo.innerText = "Presionaste el botón";
}

function enrojece() {
  cuerpo.classList.add("rojo");
>>>>>>> a82413d (Create files to demo the use of JavaScript)
}
