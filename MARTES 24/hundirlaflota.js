function obtenerRandomEntre(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function generarTablero(numFilas, numColumnas, caracterDeRelleno) {
  const tablero = [];
  for (let i = 0; i < numFilas; i++) {
    const fila = [];
    for (let j = 0; j < numColumnas; j++) {
      if (j === 0 || j === numColumnas - 1 || i === 0 || i === numFilas - 1) {
        fila.push(" ");
      } else fila.push(caracterDeRelleno);
    }
    tablero.push(fila);
  }
  return tablero;
}


function mostrarTablero(tablero) {
  for (let i = 0; i < tablero.length; i++) {
    console.table(tablero[i]);
  }
  console.log("");
}

const tablero4x4 = generarTablero(4, 4, "*");
function rellenarPosicion(tablero, posicion, caracterDeRelleno) {
  tablero[posicion.x][posicion.y] = caracterDeRelleno;
}


function obtenerCaracterEnPosicion(tablero, posicion) {
  return tablero[posicion.x][posicion.y];
}

function colocarBarcoAleatorio(tablero) {
  let coordenadaX = obtenerRandomEntre(1, tablero.length - 2);
  let coordenadaY = obtenerRandomEntre(1, tablero.length - 2);
  rellenarPosicion(
    tablero,
    {
      x: coordenadaX,
      y: coordenadaY,
    },
    "B"
  );
}

function colocarBarcoDe4(tablero) {
  let coordenadaX = obtenerRandomEntre(1, tablero.length - 2);
  let coordenadaY = obtenerRandomEntre(1, tablero.length - 2);
  if (coordenadaX > 0 && coordenadaX < 8) {
    for (let i = 0; i < 4; i++) {
      rellenarPosicion(tablero, { x: coordenadaX + i, y: coordenadaY }, "B");
    }
  } else if (coordenadaY < 4) {
    for (let i = 0; i < 4; i++) {
      rellenarPosicion(tablero, { x: coordenadaX, y: coordenadaY + i }, "B");
    }
  } else {
    for (let i = 0; i < 4; i++) {
      rellenarPosicion(tablero, { x: coordenadaX, y: coordenadaY - i }, "B");
    }
  }
}

function colocarBarcoDe3(tablero) {
  let barcoColocado = false;
  while (barcoColocado === false) {
    let coordenadaX = obtenerRandomEntre(1, tablero.length - 2);
    let coordenadaY = obtenerRandomEntre(1, tablero.length - 2);
    if (
      coordenadaX + 2 < 11 &&
      tablero[coordenadaX][coordenadaY] != "B" &&
      tablero[coordenadaX + 3][coordenadaY] != "B" &&
      tablero[coordenadaX + 2][coordenadaY] != "B" &&
      tablero[coordenadaX + 1][coordenadaY] != "B" &&
      tablero[coordenadaX + 2][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 2][coordenadaY + 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY] != "B" &&
      tablero[coordenadaX - 1][coordenadaY - 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX + 3][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 3][coordenadaY + 1] != "B" &&
      tablero[coordenadaX][coordenadaY + 1] != "B" &&
      tablero[coordenadaX][coordenadaY - 1] != "B"
    ) {
      for (let i = 0; i < 3; i++) {
        rellenarPosicion(tablero, { x: coordenadaX + i, y: coordenadaY }, "B");
      }
      barcoColocado = true;
    } else if (
      coordenadaX > 8 &&
      tablero[coordenadaX][coordenadaY] != "B" &&
      tablero[coordenadaX - 3][coordenadaY] != "B" &&
      tablero[coordenadaX - 2][coordenadaY] != "B" &&
      tablero[coordenadaX - 1][coordenadaY] != "B" &&
      tablero[coordenadaX - 2][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 2][coordenadaY - 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 3][coordenadaY - 1] != "B" &&
      tablero[coordenadaX - 3][coordenadaY + 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY] != "B" &&
      tablero[coordenadaX][coordenadaY + 1] != "B" &&
      tablero[coordenadaX][coordenadaY - 1] != "B"
    ) {
      for (let i = 0; i < 3; i++) {
        rellenarPosicion(tablero, { x: coordenadaX - i, y: coordenadaY }, "B");
      }
      barcoColocado = true;
    }
  }
}

function colocarBarcoDe2(tablero) {
  let barcoColocado = false;
  while (barcoColocado === false) {
    let coordenadaX = obtenerRandomEntre(1, tablero.length - 2);
    let coordenadaY = obtenerRandomEntre(1, tablero.length - 2);
    if (
      coordenadaY + 1 < 11 &&
      tablero[coordenadaX][coordenadaY] != "B" &&
      tablero[coordenadaX][coordenadaY + 2] != "B" &&
      tablero[coordenadaX][coordenadaY + 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY + 2] != "B" &&
      tablero[coordenadaX - 1][coordenadaY + 2] != "B" &&
      tablero[coordenadaX][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY] != "B" &&
      tablero[coordenadaX - 1][coordenadaY] != "B"
    ) {
      for (let i = 0; i < 2; i++) {
        rellenarPosicion(tablero, { x: coordenadaX, y: coordenadaY + i }, "B");
      }
      barcoColocado = true;
    } else if (
      coordenadaY === 10 &&
      tablero[coordenadaX][coordenadaY] != "B" &&
      tablero[coordenadaX][coordenadaY - 2] != "B" &&
      tablero[coordenadaX][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY - 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY - 2] != "B" &&
      tablero[coordenadaX - 1][coordenadaY - 2] != "B" &&
      tablero[coordenadaX + 1][coordenadaY] != "B" &&
      tablero[coordenadaX - 1][coordenadaY] != "B"
    ) {
      for (let i = 0; i < 2; i++) {
        rellenarPosicion(tablero, { x: coordenadaX, y: coordenadaY - i }, "B");
      }
      barcoColocado = true;
    }
  }
}

function colocarBarcoDe1(tablero) {
  let barcoColocado = false;
  let contadorDeBarcos = 0;
  while (barcoColocado === false || contadorDeBarcos < 5) {
    let coordenadaX = obtenerRandomEntre(1, tablero.length - 2);
    let coordenadaY = obtenerRandomEntre(1, tablero.length - 2);
    if (
      tablero[coordenadaX][coordenadaY] != "B" &&
      tablero[coordenadaX][coordenadaY + 1] != "B" &&
      tablero[coordenadaX][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY] != "B" &&
      tablero[coordenadaX + 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY - 1] != "B" &&
      tablero[coordenadaX + 1][coordenadaY - 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY + 1] != "B" &&
      tablero[coordenadaX - 1][coordenadaY] != "B"
    ) {
      rellenarPosicion(tablero, { x: coordenadaX, y: coordenadaY }, "B");
      barcoColocado = true;
      contadorDeBarcos++;
    }
  }
}
const tablero10 = generarTablero(12, 12, "*");

// function colocarMuchosBarcos(tablero, cuantos) {
//   for (i = 0; i < cuantos; i++) {
//     colocarBarcoAleatorio(tablero);
//   }
// }
// colocarMuchosBarcos(tablero10, 20);
// mostrarTablero(tablero10);
console.table(tablero10);

function disparar(tablero, posicionDisparo) {
  // if (obtenerCaracterEnPosicion(tablero, posicionDisparo) === "B") {
  //   if (
  //     (tablero[disparoX + 1][disparoY] != "B" &&
  //       tablero[disparoX - 1][disparoY] != "B" &&
  //       tablero[disparoX][disparoY + 1] != "B" &&
  //       tablero[disparoX][disparoY - 1] != "B") ||
  //     (tablero[disparoX + 1][disparoY] === "X" &&
  //       tablero[disparoX - 1][disparoY] != "B" &&
  //       tablero[disparoX][disparoY - 1] != "B" &&
  //       tablero[disparoX][disparoY + 1] != "B") ||
  //     (tablero[disparoX - 1][disparoY] === "X" &&
  //       tablero[disparoX + 1][disparoY] != "B" &&
  //       tablero[disparoX][disparoY - 1] != "B" &&
  //       tablero[disparoX][disparoY + 1] != "B") ||
  //     (tablero[disparoX][disparoY + 1] === "X" &&
  //       tablero[disparoX - 1][disparoY] != "B" &&
  //       tablero[disparoX][disparoY - 1] != "B" &&
  //       tablero[disparoX + 1][disparoY] != "B") ||
  //     (tablero[disparoX][disparoY - 1] === "X" &&
  //       tablero[disparoX - 1][disparoY] != "B" &&
  //       tablero[disparoX][disparoY + 1] != "B" &&
  //       tablero[disparoX + 1][disparoY] != "B")
  //   ) {
  //     rellenarPosicion(tablero, { x: disparoX, y: disparoY }, "X");
  //     aciertos++;
  //     disparosRestantes--;
  //     alert("¡Hundido!");
  //   } else {
  //     aciertos++;
  //     disparosRestantes--;
  //     rellenarPosicion(tablero, { x: disparoX, y: disparoY }, "X");
  //     alert("Tocado");
  //   }
  // } else {
  //   disparosRestantes--;
  //   alert("Agua");
  // }
  // return tablero
  if (obtenerCaracterEnPosicion(tablero, posicionDisparo)!="B"){
    disparosRestantes--;
    alert("Agua");
  }
   if (
     obtenerCaracterEnPosicion(tablero, posicionDisparo) === "B" &&
     ((tablero[disparoX + 1][disparoY]!="B" &&
       tablero[disparoX - 1][disparoY]!="B" &&
       tablero[disparoX][disparoY + 1]!="B" &&
       tablero[disparoX][disparoY - 1]!="B") ||
       (tablero[disparoX + 1][disparoY] === "X" &&
         tablero[disparoX - 1][disparoY] != "B" &&
         tablero[disparoX][disparoY - 1] != "B" &&
         tablero[disparoX][disparoY + 1] != "B") ||
       (tablero[disparoX - 1][disparoY] === "X" &&
         tablero[disparoX + 1][disparoY] != "B" &&
         tablero[disparoX][disparoY - 1] != "B" &&
         tablero[disparoX][disparoY + 1] != "B") ||
       (tablero[disparoX][disparoY + 1] === "X" &&
         tablero[disparoX - 1][disparoY] != "B" &&
         tablero[disparoX][disparoY - 1] != "B" &&
         tablero[disparoX + 1][disparoY] != "B") ||
       (tablero[disparoX][disparoY - 1] === "X" &&
         tablero[disparoX - 1][disparoY] != "B" &&
         tablero[disparoX][disparoY + 1] != "B" &&
         tablero[disparoX + 1][disparoY] != "B"))
   ) {
     rellenarPosicion(tablero, { x: disparoX, y: disparoY }, "X");
     aciertos++;
     disparosRestantes--;
     alert("¡Hundido!");
   } else if (obtenerCaracterEnPosicion(tablero, posicionDisparo) === "B") {
     aciertos++;
     disparosRestantes--;
     rellenarPosicion(tablero, { x: disparoX, y: disparoY }, "X");
     alert("Tocado");
   }
}
colocarBarcoDe4(tablero10);
colocarBarcoDe3(tablero10);
colocarBarcoDe3(tablero10);
colocarBarcoDe2(tablero10);
colocarBarcoDe2(tablero10);
colocarBarcoDe2(tablero10);
colocarBarcoDe1(tablero10);

let disparosRestantes = 40;
let aciertos = 0;
let disparoX = 0;
let disparoY = 0;
while (disparosRestantes>0) {
  alert("Tienes " + disparosRestantes + " disparos");
  disparoX = prompt("Pon coordenada X(1-10)");
  disparoY = prompt("Pon coordenada Y(1-10)");
  if (disparoX >= 0 && disparoX <= 10 && disparoY >= 0 && disparoY <= 10) {
    disparar(tablero10, { x: disparoX, y: disparoY });
  } else {
    alert("Coordenadas incorrectas");
  
  }

  if (aciertos === 20) {
    alert("HUNDISTE LA FLOTA");
    break;
  }
}
if (aciertos<20){
  alert("Has perdido");
}


