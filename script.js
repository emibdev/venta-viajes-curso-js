import { barcelona, roma, paris, londres } from './ciudades.js';

// obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// agregar un evento "click" a cada enlace
enlaces.forEach( (enlace) => {

    enlace.addEventListener('click', () => {

        enlaces.forEach( (enlace) => {
            // remover la clase "active" de todos los enlaces
            enlace.classList.remove('active');
        });

        // agregar la clase "active" al enlace actual
        enlace.classList.add('active');

        // obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(enlace.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

// funcion para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {

    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    };

    return contenido[enlace];
} 


