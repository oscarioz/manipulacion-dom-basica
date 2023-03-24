const h1          = document.querySelector('h1');
const form        = document.querySelector('#form');
const calculo1    = document.querySelector('#calculo1');
const calculo2    = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const resultado   = document.querySelector('#result');

form.addEventListener('submit', realizarOperacion);

function realizarOperacion(event) {
    resultado.innerHTML = Number(calculo1.value) + Number(calculo2.value);

    console.log(event);
    event.preventDefault();
}