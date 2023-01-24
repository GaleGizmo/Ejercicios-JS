const tableroInicial = [
  ["", "", ""],
  ["", "", ""],
  ["", "", "r"],
];
let tableroJuego = [
  ["", "", ""],
  ["", "", ""],
  ["", "", "r"],
];
// const tableroFinal = [
//   ["r", "", ""],
//   ["", "", ""],
//   ["", "", ""],
// ];

/** *  moverRaton(tablero,direccion) -> dada una dirección, cambia la posicion del raton    getPosicionRaton(tablero) -> funcion que devuelva la posición actual del ratón    getPosicionQueso(tablero) -> funcion que devuelva la posición del queso    finJuego(tableroInicial, tableroFinal) -> si la posicion del raton coincide con la posición del queso */
/** * direcciones: 'u' -> arriba -> up'd' -> abajo -> down'l' -> izquierda -> left'r' -> derecha -> right */

function getPosicion(tablero, caracter) {
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] === caracter) {
        return [i, j];
      }
    }
  }
}
//Coloca el queso semi-aleatoriamente. No estará nunca a una casilla del ratón
let coordenadaAleatoria1 = Math.round(Math.random() * 2);
let coordenadaAleatoria2 = Math.round(Math.random() * 2);
if (coordenadaAleatoria1 > 0) {
  coordenadaAleatoria2 = 0;
}
tableroInicial[coordenadaAleatoria1][coordenadaAleatoria2] = "q";

function getPosicionRaton(tablero) {
  return getPosicion(tablero, "r");
}
function getPosicionQueso(tablero) {
  return getPosicion(tablero, "q");
}

function esFinJuego() {
  if (
    getPosicionQueso(tableroInicial)[0] === getPosicionRaton(tableroJuego)[0] &&
    getPosicionQueso(tableroInicial)[1] === getPosicionRaton(tableroJuego)[1]
  ) {
    return true;
  } else return false;
}
function moverRaton(tablero, direccion) {
  const raton = getPosicionRaton(tablero);
 
  if (direccion === "u" && raton[1] > 0) {
    tableroJuego[raton[0]][raton[1]] = "";
    tableroJuego[raton[0]][raton[1] - 1] = "r";
    return tableroJuego;
  }
  if (direccion === "d" && raton[1] < 2) {
    tableroJuego[raton[0]][raton[1]] = "";
    tableroJuego[raton[0]][raton[1] + 1] = "r";
    return tableroJuego;
  }
  if (direccion === "l" && raton[0] > 0) {
    tableroJuego[raton[0]][raton[1]] = "";
    tableroJuego[raton[0] - 1][raton[1]] = "r";
    return tableroJuego;
  }
  if (direccion === "r" && raton[0] < 2) {
    tableroJuego[raton[0]][raton[1]] = "";
    tableroJuego[raton[0] + 1][raton[1]] = "r";
    return tableroJuego;
  }
  alert("Te has salido del tablero, prueba otra vez");
  return tableroJuego;
}

// for (let i = 4; i >= 0; i--) {
//   if (i===0 && !esFinJuego()) {
//     alert("Vaya, te has quedado sin movimientos")
//   break
// }

//       alert("Tienes " + i + " movimientos");
//   let direction = prompt("Hacia donde quieres ir(u/d/l/r)?");
//   if (
//     direction === "u" ||
//     direction === "d" ||
//     direction === "l" ||
//     direction === "r"
//   ) {
//     moverRaton(tableroJuego, direction);
//     esFinJuego(tableroJuego, tableroFinal);
//     if (esFinJuego()) {break}
//   } else {i++
//     alert("Por favor, pulsa u, d, l o r");
//   }
//   }

let contadorIntentos = 4;
while (!esFinJuego() && contadorIntentos >= 0) {
  if (contadorIntentos === 0) {
    alert("Vaya, te has quedado sin movimientos");
    break;
  } else {
    alert("Tienes " + contadorIntentos + " movimientos");
    let direction = prompt("Hacia donde quieres ir(u/d/l/r)?");
    if (
      direction === "u" ||
      direction === "d" ||
      direction === "l" ||
      direction === "r"
    ) {
      moverRaton(tableroJuego, direction);
      esFinJuego();
      contadorIntentos--;
    } else {
      alert("Por favor, pulsa u, d, l o r");
    }
  }
}

if (esFinJuego()) {
  alert("¡¡Bien, lo encontraste!!");
}
let recargar = prompt("Quieres probar otra vez?(Y/N)");
if (recargar === "y" || recargar === "Y") {
  location.reload();
} else alert("¡Hasta otra!");
