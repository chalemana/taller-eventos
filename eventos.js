// soluciones para el click

document.addEventListener('DOMContentLoaded', (event) => {
    // Seleccionamos el botón y el div
    let boton = document.getElementById('#buttonSaludar');
    let div = document.querySelector('.button1');

    // Manejador de evento para el botón
    boton.addEventListener('click', (event) => {
        alert('Hola!');
        event.stopPropagation(); // Esta funcion detiene la propagación del evento
    });

    // Manejador de evento para el div
    div.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
});
