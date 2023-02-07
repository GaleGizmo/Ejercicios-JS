export function obtenerRandomEntre(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
export   function generarTablero(numFilas, numColumnas, caracterDeRelleno) {
    const tablero = [];
    for (let i = 0; i < numFilas; i++) {
      const fila = [];
      for (let j = 0; j < numColumnas; j++) {
        if (
          j === 0 ||
          j === 1 ||
          j === 2 ||
          j === numColumnas - 1 ||
          j === numColumnas - 2 ||
          j === numColumnas - 3 ||
          i === 0 ||
          i === 1 ||
          i === 2 ||
          i === numFilas - 1 ||
          i === numFilas - 2 ||
          i === numFilas - 3
        ) {
          fila.push(" ");
        } else fila.push(caracterDeRelleno);
      }
      tablero.push(fila);
    }
    return tablero;
  }
 export function mostrarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
      console.table(tablero[i]);
    }
    console.log("");
  }
  
export  function rellenarPosicion(tablero, posicion, caracterDeRelleno) {
    tablero[posicion.x][posicion.y] = caracterDeRelleno;
  }
  
export  function obtenerCaracterEnPosicion(tablero, posicion) {
    return tablero[posicion.x][posicion.y];
  }

  //funciones para colocar los barcos en el tablero

  export function colocarBarcoDe4(tablero) {
    let coordenadaX = obtenerRandomEntre(3, tablero.length - 4);
    let coordenadaY = obtenerRandomEntre(3, tablero.length - 4);
    if (coordenadaX > 2 && coordenadaX < 10) {
      for (let i = 0; i < 4; i++) {
        rellenarPosicion(tablero, { x: coordenadaX + i, y: coordenadaY }, "B");
      }
    } else if (coordenadaY < 7) {
      for (let i = 0; i < 4; i++) {
        rellenarPosicion(tablero, { x: coordenadaX, y: coordenadaY + i }, "B");
      }
    } else {
      for (let i = 0; i < 4; i++) {
        rellenarPosicion(tablero, { x: coordenadaX, y: coordenadaY - i }, "B");
      }
    }
  }
  
  export function colocarBarcosDe3(tablero) {
    let barcoColocado = false;
    let contadorDeBarcos=0
    while (barcoColocado === false || contadorDeBarcos<2) {
      let coordenadaX = obtenerRandomEntre(3, tablero.length - 4);
      let coordenadaY = obtenerRandomEntre(3, tablero.length - 4);
      if (
        coordenadaX + 2 < 13 &&
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
        contadorDeBarcos++
      } else if (
        coordenadaX > 10 &&
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
        contadorDeBarcos++
      }
    }
  }
  
 export function colocarBarcosDe2(tablero) {
    let barcoColocado = false;
    let contadorDeBarcos=0
    while (barcoColocado === false || contadorDeBarcos<3) {
      let coordenadaX = obtenerRandomEntre(3, tablero.length - 4);
      let coordenadaY = obtenerRandomEntre(3, tablero.length - 4);
      if (
        coordenadaY + 1 < 13 &&
        tablero[coordenadaX][coordenadaY] != "B" &&
        tablero[coordenadaX][coordenadaY + 2] != "B" &&
        tablero[coordenadaX][coordenadaY + 1] != "B" &&
        tablero[coordenadaX + 1][coordenadaY + 1] != "B" &&
        tablero[coordenadaX - 1][coordenadaY + 1] != "B" &&
        tablero[coordenadaX + 1][coordenadaY - 1] != "B" &&
        tablero[coordenadaX - 1][coordenadaY - 1] != "B" &&
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
        contadorDeBarcos++
      } else if (
        coordenadaY === 12 &&
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
        contadorDeBarcos++
      }
    }
  }
  
 export function colocarBarcosDe1(tablero) {
    let barcoColocado = false;
    let contadorDeBarcos = 0;
    while (barcoColocado === false || contadorDeBarcos < 4) {
      let coordenadaX = obtenerRandomEntre(3, tablero.length - 4);
      let coordenadaY = obtenerRandomEntre(3, tablero.length - 4);
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

  