export function muestraBarcos(barcosHundidos) {
    barcos.innerHTML = `${barcosHundidos}`;
    muestraBarcosHundidosTxt.insertAdjacentElement("afterend", barcos);
    barcosQuedan.innerHTML = `${10 - barcosHundidos}`;
    muestraBarcosQuedanTxt.insertAdjacentElement("afterend", barcosQuedan);
  }
  
export  function muestraDisparos(disparosRestantes) {
    disparos.innerHTML = `${disparosRestantes}`;
    muestraDisparosTxt.insertAdjacentElement("afterend", disparos);
  }

export  function compruebaBarcoHundido4(tablero, posicionDisparo) {
    if (
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x + 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x + 2,
          y: posicionDisparo.y,
        }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x + 3,
          y: posicionDisparo.y,
        }) === "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x - 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x - 2,
          y: posicionDisparo.y,
        }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x - 3,
          y: posicionDisparo.y,
        }) === "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y + 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y + 2,
        }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y + 3,
        }) === "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y - 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y - 2,
        }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y - 3,
        }) === "X")
    ) {
      return true;
    }
  }
  
export  function compruebaBarcoHundido3(tablero, posicionDisparo) {
    if (
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x + 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x + 2,
          y: posicionDisparo.y,
        }) === "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x - 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x - 2,
          y: posicionDisparo.y,
        }) === "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y + 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y + 2,
        }) === "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y - 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y - 2,
        }) === "X")
    ) {
      return true;
    }
  }
  
export  function compruebaBarcoHundido2(tablero, posicionDisparo) {
    if (
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x + 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x + 2,
          y: posicionDisparo.y,
        }) != "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x - 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x - 2,
          y: posicionDisparo.y,
        }) != "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y + 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y + 2,
        }) != "X") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y - 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y - 2,
        }) != "X")
    ) {
      return true;
    }
  }
  
export  function compruebaBarcoHundido1(tablero, posicionDisparo) {
    if (
      obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x + 1,
        y: posicionDisparo.y,
      }) != "X" ||
      obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x - 1,
        y: posicionDisparo.y,
      }) != "X" ||
      obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y + 1,
      }) != "X" ||
      obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y - 1,
      }) != "X"
    ) {
      return true;
    }
  }
  
 export function muestraBarcosHundidos(tablero, posicionDisparo, dest, acor, frag) {
    if (compruebaBarcoHundido4(tablero, posicionDisparo)) {
      let barco = document.getElementById("info-barcos__port");
      barco.style.opacity = "0.2";
      let cuantosBarcos = document.getElementById("port");
      cuantosBarcos.innerHTML = "0";
      cuantosBarcos.style.opacity = "0.2";
    }
  
    let barco = document.getElementById("info-barcos__dest");
    let cuantosBarcos = document.getElementById("dest");
    switch (dest) {
      case 1:
        cuantosBarcos.innerHTML = `${dest}`;
        barco.style.opacity = `0.6`;
        cuantosBarcos.style.opacity = `0.6`;
        break;
      case 0:
        cuantosBarcos.innerHTML = `${dest}`;
        barco.style.opacity = `0.2`;
        cuantosBarcos.style.opacity = `0.2`;
        break;
    }
    barco = document.getElementById("info-barcos__acor");
    cuantosBarcos = document.getElementById("acor");
    switch (acor) {
      case 2:
        cuantosBarcos.innerHTML = `${acor}`;
        barco.style.opacity = `0.74`;
        cuantosBarcos.style.opacity = `0.74`;
        break;
  
      case 1:
        cuantosBarcos.innerHTML = `${acor}`;
        barco.style.opacity = `0.47`;
        cuantosBarcos.style.opacity = `0.47`;
        break;
      case 0:
        cuantosBarcos.innerHTML = `${acor}`;
        barco.style.opacity = `0.2`;
        cuantosBarcos.style.opacity = `0.2`;
        break;
    }
  
    barco = document.getElementById("info-barcos__frag");
    cuantosBarcos = document.getElementById("frag");
    switch (frag) {
      case 3:
        cuantosBarcos.innerHTML = `${frag}`;
        barco.style.opacity = `0.8`;
        cuantosBarcos.style.opacity = `0.8`;
        break;
      case 2:
        cuantosBarcos.innerHTML = `${frag}`;
        barco.style.opacity = `0.6`;
        cuantosBarcos.style.opacity = `0.6`;
        break;
  
      case 1:
        cuantosBarcos.innerHTML = `${frag}`;
        barco.style.opacity = `0.4`;
        cuantosBarcos.style.opacity = `0.4`;
        break;
      case 0:
        cuantosBarcos.innerHTML = `${frag}`;
        barco.style.opacity = `0.2`;
        cuantosBarcos.style.opacity = `0.2`;
        break;
    }
  }
  
  function obtenerCaracterEnPosicion(tablero, posicion) {
    return tablero[posicion.x][posicion.y];
  }