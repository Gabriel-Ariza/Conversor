const distancia = document.getElementById('distance');
const convertir = document.getElementById('convertir');
const input_select = document.getElementById('input-dates-select');
const output_select = document.getElementById('output-dates-select');


function tiapaola(result) {
    let bom = document.getElementById('resultado')
    bom.style.display = 'flex'

    let rpt = document.getElementById('respuesta_final')
    rpt.innerHTML = `El resultado es ${result}`


    let boton_cerrado = document.getElementById('cerrar_resultado')
    boton_cerrado.addEventListener('click', () => {
        bom.style.display = 'none'
    })
}


const end_distance = () => {
    //inicio de pasar de km aaa
    let result = 0

    if(input_select.value === 'km' && output_select.value ===  'm' ){
        result = distancia.value * 1000
        hola.innerHTML = `hola ${result}`
        tiapaola(result)

    } else if(input_select.value ===  'm' && output_select.value === 'km'){
        result = distancia.value / 1000
        tiapaola(result)
    }

    else if(input_select.value == 'km' && output_select.value == 'mi' || input_select.value == 'mi' && output_select.value == 'km'){
        result = distance * 0.621371
        tiapaola(result)

    }
    else if(input_select.value == 'km' && output_select.value == 'ft' || input_select.value == 'ft' && output_select.value == 'km'){
        result = distance * 33280.84
        tiapaola(result)
    }
    else if(input_select.value == 'km' && output_select.value == 'cm' || input_select.value == 'cm' && output_select.value == 'km'){
        result = distance * 100000
        tiapaola(result)
    }
    //fin de kilometros

    //inicio de metros aaa
    else if(input_select.value == 'm' && output_select.value == 'cm' || input_select.value == 'cm' && output_select.value == 'm'){
        result = distance * 100
        tiapaola(result)
    }
    else if(input_select.value == 'm' && output_select.value == 'mi' || input_select.value == 'mi' && output_select.value == 'm'){
        result = distance * 0.000621371
        tiapaola(result)
    }
    else if(input_select.value == 'm' && output_select.value == 'ft' || input_select.value == 'ft' && output_select.value == 'm'){
        result = distance * 3.28084
        tiapaola(result)
    }
    //fin de metros aaa


    //inicio de millas aaa
    else if(input_select.value == 'mi' && output_select.value == 'cm' || input_select.value == 'cm' && output_select.value == 'mi'){
        result = distance * 160934
        alert("EL RESULTADO ES: ", result)
    }
    else if(input_select.value == 'mi' && output_select.value == 'ft' || input_select.value == 'ft' && output_select.value == 'mi'){
        result = distance * 5280
        alert("EL RESULTADO ES: ", result)
    }
    //fin de millas aaa


    //inicio de cm aa
    else if(input_select.value == 'cm' && output_select.value == 'ft' || input_select.value == 'cm' && output_select.value == 'ft'){
        result = distance * 0.0328084
        alert("EL RESULTADO ES: ", result)
    }

    else {
        alert("DATOS INVALIDOSSS")
    }
}



convertir.addEventListener('click', () => {
    end_distance();
    console.log(input_select.value);
    console.log(output_select.value);
    console.log(distancia.value);
});
