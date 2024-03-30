const PromptSync = require("prompt-sync");

// Estados
let q0 = "q0";
let q1 = "q1";
let q2 = "q2";

// Alfabeto
let alfabeto = "ab";

// Funcion de Transicion
let funcionTransicion = {
    q0: { [alfabeto[0]]: q0, [alfabeto[1]]: q1 },
    q1: { [alfabeto[0]]: q2, [alfabeto[1]]: q0 },
    q2: { [alfabeto[0]]: q2, [alfabeto[1]]: q1 }
};

// Estado Inicial
let estadoInicial = q0;

// Estado de Aceptacion
let estadoAceptacion = q2;

let estadoActual = null;

const prompt = require("prompt-sync")();
const palabraUsuario = prompt("Ingrese una palabra: ");


function chequearPalabraIngresada(palabra) {
    let palabraValida = true;
    for (let index = 0; index < palabra.length; index++) {
        const element = palabra[index];
        if (!alfabeto.includes(element)) {
            palabraValida = false;
            break;
        }
    }

    if (palabraValida) {
        console.log("Palabra válida.");
    } else {
        console.log("Palabra no válida.");
    }
    return palabraValida
}


function cambiarEstado(palabra) {
    if (estadoActual == null) {
        estadoActual = estadoInicial;
    }
    for (let index = 0; index < palabra.length; index++) {
        const element = palabra[index];
        let estadoAnterior = estadoActual;
        console.log(funcionTransicion[estadoAnterior])
        let temp = funcionTransicion[estadoAnterior]
        console.log(temp[element])
        estadoActual = temp[element]
    }

}

if (chequearPalabraIngresada(palabraUsuario)) {
    cambiarEstado(palabraUsuario) 
    if (estadoActual == estadoAceptacion) {
        console.log("Palabra Aceptada")
    } else {
        console.log("Palabra No Aceptada")
    }

}

