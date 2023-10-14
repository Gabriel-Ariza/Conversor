const peso = document.getElementById('weight');
const convertir = document.getElementById('convertir');
const input_select_w = document.getElementById('input-weight');
const output_select_w = document.getElementById('output-weight');

let result = null

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

export const end_weight = () => {
    // miligramos
    if (input_select_w == 'mg' && output_select_w == 'lb') {
        result = weight / 453600
        tiapaola(result)
    } else if (input_select_w == 'lb' && output_select_w == 'mg') {
        result = weight * 453600
        tiapaola(result)
    } else if (input_select_w == 'mg' && output_select_w == 't') {
        result = weight / 1e+9
        tiapaola(result)
    } else if (input_select_w == 't' && output_select_w == 'mg') {
        result = weight * 1e+9
        tiapaola(result)
    }

    // gramos
    else if (input_select_w == 'g' && output_select_w == 'mg') {
        result = weight * 1000
        tiapaola(result)
    } else if (input_select_w == 'mg' && output_select_w == 'g') {
        result = weight / 1000
        tiapaola(result)
    } else if (input_select_w == 'g' && output_select_w == 'kg') {
        result = weight / 1000
        tiapaola(result)
    } else if (input_select_w == 'kg' && output_select_w == 'g') {
        result = weight * 1000
        tiapaola(result)
    } else if (input_select_w == 'g' && output_select_w == 'lb') {
        result = weight / 453.6
        tiapaola(result)
    } else if (input_select_w == 'lb' && output_select_w == 'g') {
        result = weight * 453.6
        tiapaola(result)
    } else if (input_select_w == 'g' && output_select_w == 't') {
        result = weight / 1e+6
        tiapaola(result)
    } else if (input_select_w == 't' && output_select_w == 'g') {
        result = weight * 1e+6
        tiapaola(result)
    }

    // kilogramos
    else if (input_select_w == 'kg' && output_select_w == 'mg') {
        result = weight * 1e+6
        tiapaola(result)
    } else if (input_select_w == 'mg' && output_select_w == 'kg') {
        result = weight / 1e-6
        tiapaola(result)
    } else if (input_select_w == 'kg' && output_select_w == 'lb') {
        result = weight * 2.205
        tiapaola(result)
    } else if (input_select_w == 'lb' && output_select_w == 'kg') {
        result = weight / 2.205
        tiapaola(result)
    } else if (input_select_w == 'kg' && output_select_w == 't') {
        result = weight / 1000
        tiapaola(result)
    } else if (input_select_w == 't' && output_select_w == 'kg') {
        result = weight * 1000
        tiapaola(result)
    }

    // libra
    else if (input_select_w == 'lb' && output_select_w == 't') {
        result = weight / 2205
        tiapaola(result)
    } else if (input_select_w == 't' && output_select_w == 'lb') {
        result = weight * 2205
        tiapaola(result)
    } else {
        alert("DATOS INVÁLIDOS")
    }

    // tonelada
};


convertir.addEventListener('click', () => {
    end_weight();
    console.log(input_select_w.value);
    console.log(output_select_w.value);
    console.log(peso.value);
});
