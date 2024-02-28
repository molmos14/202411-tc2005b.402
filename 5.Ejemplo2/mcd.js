const entradas = document.getElementById('entradas');
const entrada1 = document.getElementById('entrada1');
const entrada2 = document.getElementById('entrada2');
const boton_mcd = document.getElementById('boton_mcd');
const salida = document.getElementById('salida');
const resultado =  document.getElementById('Resultado');

boton_mcd.addEventListener('click', calcular);

/*
boton_mcd.addEventListener('click', () => {
    let a = entrada1.value;
    let b = entrada2.value;
    let mcd = mcd(a, b);
    resultado.innerHTML = `El MCD de ${a} y ${b} es ${mcd}`;
});
*/

function calcular(){
    let x = parseInt(entrada1.value) || 0; 
    // se convierte a entero con parseInt
    // parseInt regresa NaN si no puede convertir la cadena a número
    let y = parseInt(entrada2.value) || 0;
    let z = mcd(x, y);
    resultado.innerHTML = `El MCD de ${x} y ${y} es ${z}`;
    entradas.style.display = 'none';
    salida.style.display = 'block';
    // none lo hace invisible y block lo hace visible
}

// algoritmo de euclides/euclidiano
function mcd(a, b){
    while(b != 0){
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}