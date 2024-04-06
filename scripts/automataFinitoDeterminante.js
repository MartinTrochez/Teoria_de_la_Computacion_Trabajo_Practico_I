// Estados
let q0 = "q0";
let q1 = "q1";
let q2 = "q2";
let q3 = "q3";
let q4 = "q4";

// Alfabeto
let alfabeto = "ab";

// Funcion de Transicion
let funcionTransicion = {
  q0: { [alfabeto[0]]: q1, [alfabeto[1]]: q4 },
  q1: { [alfabeto[0]]: q2, [alfabeto[1]]: q3 },
  q2: { [alfabeto[0]]: q4, [alfabeto[1]]: q4 },
  q3: { [alfabeto[0]]: q2, [alfabeto[1]]: q3 },
  q4: { [alfabeto[0]]: q4, [alfabeto[1]]: q4 },
};

// Estado Inicial
let estadoInicial = q0;

// Estado de Aceptacion
let estadoAceptacion = [q2, q3];

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
    for (let index = 0; index < estadoAceptacion.length; index++) {
      const element = estadoAceptacion[index];
      console.log("elemento " + element);
      console.log(estadoAceptacion);
      if (estadoActual === element) {
        palabraAceptada = true;
        break;
      }
    }
    if (palabraAceptada) {
      resultadoNegativo.style.setProperty('display', 'none', 'important') ;
      resultadoPositivo.style.display = "block";
      resultadoPositivo.innerHTML = "Palabra Aceptada";
      
    } else {
      resultadoPositivo.style.setProperty('display', 'none', 'important') ;
      resultadoNegativo.style.display = "block";
      resultadoNegativo.innerHTML = "Palabra No Aceptada";
    
      
    }
  }
}

function cambiarEstado(palabra) {
  estadoActual = estadoInicial;

  for (let index = 0; index < palabra.length; index++) {
    const element = palabra[index];
    let estadoAnterior = estadoActual;
    let temp = funcionTransicion[estadoAnterior];
    estadoActual = temp[element];
  }
}
