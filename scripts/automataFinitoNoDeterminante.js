// Estados
const estados = ["q0", "q1", "q2"];

// Alfabeto
const alfabeto = "ab";

// Funcion de Transicion
const funcionTransicion = {
    [estados[0]]: [[alfabeto[0], estados[1]], [alfabeto[1], []]],
    [estados[1]]: [[alfabeto[0], estados[2]], [alfabeto[1], estados[1]], [alfabeto[1], estados[2]]],
    [estados[2]]: [[alfabeto[0], []], [alfabeto[1], []]],
};




// Estado Inicial
const estadoInicial = estados[0];

// Estado de Aceptacion
const estadosAceptacion = [estados[2]];

let estadoActual = null;


let estadoActualImagen = document.getElementById("estadoActualImagen");

function mostrarImagen() {
    switch (estadoActual) {
        case estados[0]:
            estadoActualImagen.src = "./automatas/no_determinante_primer/q0.jpg";
            break;
        case estados[1]:
            estadoActualImagen.src = "./automatas/no_determinante_primer/q1.jpg";
            break;
        case estados[2]:
            estadoActualImagen.src = "./automatas/no_determinante_primer/q2.jpg";
            break;
        default:
            estadoActualImagen.src = "./automatas/no_determinante_primer/sinPintar.jpg";
            break;
    }

}

function verificarPalabra() {
    let palabraUsuario = document.getElementById("palabra").value;
    chequearPalabraIngresada(palabraUsuario);
}

function chequearPalabraIngresada(palabra) {
    let palabraValida = true;
    for (let index = 0; index < palabra.length; index++) {
        const element = palabra[index];
        console.log(element);
        if (!alfabeto.includes(element)) {
            palabraValida = false;
            break;
        }
    }
    mostrarResultado(palabraValida);
}

async function mostrarResultado(resultado) {
    palabraUsuario = document.getElementById("palabra").value;
    resultadoPositivo = document.getElementById("resultadoPositivo");
    resultadoNegativo = document.getElementById("resultadoNegativo");
    if (resultado == false) {
        alert("Ingrese de nuevo la Palabra");
        document.getElementById("palabra").value = "";
        resultadoElemento.innerHTML = "";
    } else {
        let palabraAceptada = false;
        cambiarEstado(palabraUsuario);
        if (estadosAceptacion.includes(estadoActual)) {
            palabraAceptada = true;
        }
        if (palabraAceptada) {
            resultadoNegativo.style.setProperty('display', 'none', 'important');
            resultadoPositivo.style.display = "block";
            resultadoPositivo.innerHTML = "Palabra Aceptada";
        } else {
            resultadoPositivo.style.setProperty('display', 'none', 'important');
            resultadoNegativo.style.display = "block";
            resultadoNegativo.innerHTML = "Palabra No Aceptada";
        }
    }
}

async function cambiarEstado(palabra, estadoTemp = null) {
    let palabraTamanio = palabra.length
    estadoActual = estadoTemp
    if (estadoActual === null) {
        estadoActual = estadoInicial
    }
    mostrarImagen();
    console.log("estado actual " + estadoActual);
    console.log("Palabra " + palabra);
    console.log("Palabra[0] " + palabra[0]);

    for (let index = 0; index < estadosAceptacion.length; index++) {
        const estadoAceptacion = estadosAceptacion[index];
        if (palabraTamanio === 0 && estadoActual === estadoAceptacion) {
            return
        }
    }
    const nodosAdyacentes = funcionTransicion[estadoActual];
    console.log("nodosAdyacentes " + nodosAdyacentes)
    let contador = 0;
    for (const nodoAdyacente of nodosAdyacentes) {
        contador += 1;
        if (Object.keys(nodosAdyacentes).length === contador) {
            console.log("Keys " + nodosAdyacentes[1]);
            console.log("nodoAdyacente[1]  " + nodoAdyacente[1])
            let position = nodoAdyacente.indexOf(estadosAceptacion[0])
            if (position !== -1) {
                estadoActual = nodoAdyacente[position];
                mostrarImagen()
            }
        }
        if (nodoAdyacente.includes(palabra[0])) {
            console.log(nodoAdyacente);
            if (nodoAdyacente[1].length === 0) {
                console.log(nodoAdyacente[1]);
                continue;
            }
            console.log("\n")
            return cambiarEstado(palabra.slice(1, palabraTamanio), nodoAdyacente[1]);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
