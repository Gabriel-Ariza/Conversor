const backgrounds = ['url(background1.png)', 'url(background2.png)'];
let fondo_actual = 0;
const contenedor = document.querySelector('.container');

function changeBackground() {
    fondo_actual++;
    if (fondo_actual >= backgrounds.length) {
        fondo_actual = 0;
    }

    contenedor.style.backgroundImage = backgrounds[fondo_actual];
}
setInterval(changeBackground, 10000);
changeBackground();

import { end_distance } from "./distance.js";
import { end_temperature } from "./temperature.js";
import { end_weight } from "./weight.js";

const boton_distancia = document.getElementById('boton_distancia');
const boton_temperatura = document.getElementById('boton_temperatura');
const boton_peso = document.getElementById('boton_peso');

const modal_distancia = document.getElementById('modal1');
const btn_x_modal_distancia = document.getElementById('boton_x_modal1');

const modal_temperatura = document.getElementById('modal2');
const btn_x_modal_temperatura = document.getElementById('boton_x_modal2');

const modal_peso = document.getElementById('modal3');
const btn_x_modal_peso = document.getElementById('boton_x_modal3');


boton_distancia.addEventListener('click', () => {
    modal_distancia.style.display = "flex";
    console.log("modal_distancia");

    btn_x_modal_distancia.addEventListener('click', () => {
        modal_distancia.style.display = "none";
    });
    end_distance();
});

boton_temperatura.addEventListener('click', () => {
    modal_temperatura.style.display = "flex";
    console.log("modal_temperatura");
    
    btn_x_modal_temperatura.addEventListener('click', () => {
        modal_temperatura.style.display = "none";
    });

    const boton_sapito = document.getElementById('sapito');
    boton_sapito.addEventListener('click', () => {
        end_temperature();
    });
});

boton_peso.addEventListener('click', () => {
    modal_peso.style.display = "flex";
    console.log("modal_peso");

    btn_x_modal_peso.addEventListener('click', () => {
        modal_peso.style.display = "none";
    });

    const button_convertir_peso = document.getElementById('button-convertir-peso');
    button_convertir_peso.addEventListener('click', () => {
        end_weight();
    });
});
