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
  q2: { [alfabeto[0]]: q2, [alfabeto[1]]: q1 },
};

// Estado Inicial
let estadoInicial = q0;

// Estado de Aceptacion
let estadoAceptacion = q2;

let estadoActual = null;

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

function mostrarResultado(resultado) {
  if (resultado == false) {
    alert("Ingrese de nuevo la Palabra");
    document.getElementById("palabra").value = "";
  } else {
    palabraUsuario = document.getElementById("palabra").value;
    resultadoElemento = document.getElementById('resultado')
    cambiarEstado(palabraUsuario);
    if (estadoActual == estadoAceptacion) {
      resultadoElemento.innerHTML = "Palabra aceptada";
    } else {
      resultadoElemento.innerHTML = "Palabra NO aceptada";
    }
  }
}

function cambiarEstado(palabra) {
  if (estadoActual == null) {
    estadoActual = estadoInicial;
  }
  for (let index = 0; index < palabra.length; index++) {
    const element = palabra[index];
    let estadoAnterior = estadoActual;
    console.log(funcionTransicion[estadoAnterior]);
    let temp = funcionTransicion[estadoAnterior];
    console.log(temp[element]);
    estadoActual = temp[element];
  }
}
