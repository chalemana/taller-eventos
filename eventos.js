//En eventos.js agrega un manejador de eventos para el "click" en el div utilizando el método addEventListener. Debes programar que al dar click en el div salga una alerta con el texto "Hola! Soy el div".

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.button1').addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
});

