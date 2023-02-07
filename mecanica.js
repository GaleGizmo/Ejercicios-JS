export function compruebaFinal(hits, shotsleft) {
    if (hits === 10) {
      alert("HUNDISTE LA FLOTA!!");
      return true;
    }
    if (shotsleft === 0) {
      alert("No te quedan disparos");
      return true;
    }
    return false;
  }

export   function disparar(
    tablero,
    posicionDisparo,
    shotsleft,
    hits,
    result,
    dest,
    acor,
    frag
  ) {
    let total = [];
    if (
      obtenerCaracterEnPosicion(tablero, posicionDisparo) === "0" ||
      obtenerCaracterEnPosicion(tablero, posicionDisparo) === "X"
    ) {
      result = -1;
      total[0] = shotsleft;
      total[1] = hits;
      total[2] = result;
      total[3] = dest;
      total[4] = acor;
      total[5] = frag;
      return total;
    }
  
    if (obtenerCaracterEnPosicion(tablero, posicionDisparo) === "*") {
      rellenarPosicion(tablero, posicionDisparo, "0");
      result = 0;
      alert("Agua");
    } else if (
      (obtenerCaracterEnPosicion(tablero, posicionDisparo) === "B" &&
        (obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x + 1,
          y: posicionDisparo.y,
        }) === "B" ||
          obtenerCaracterEnPosicion(tablero, {
            x: posicionDisparo.x - 1,
            y: posicionDisparo.y,
          }) === "B" ||
          obtenerCaracterEnPosicion(tablero, {
            x: posicionDisparo.x,
            y: posicionDisparo.y - 1,
          }) === "B" ||
          obtenerCaracterEnPosicion(tablero, {
            x: posicionDisparo.x,
            y: posicionDisparo.y + 1,
          }) === "B")) ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y + 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y + 2,
        }) === "B") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y - 1,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y - 2,
        }) === "B") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x + 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x + 2,
          y: posicionDisparo.y,
        }) === "B") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x - 1,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x - 2,
          y: posicionDisparo.y,
        }) === "B") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y + 2,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y + 3,
        }) === "B") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x,
        y: posicionDisparo.y - 2,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x,
          y: posicionDisparo.y - 3,
        }) === "B") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x + 2,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x + 3,
          y: posicionDisparo.y,
        }) === "B") ||
      (obtenerCaracterEnPosicion(tablero, {
        x: posicionDisparo.x - 2,
        y: posicionDisparo.y,
      }) === "X" &&
        obtenerCaracterEnPosicion(tablero, {
          x: posicionDisparo.x - 3,
          y: posicionDisparo.y,
        }) === "B")
    ) {
      rellenarPosicion(tablero, posicionDisparo, "X");
  
      result = 1;
      alert("Tocado!");
    } else if (obtenerCaracterEnPosicion(tablero, posicionDisparo) === "B") {
      hits++;
      rellenarPosicion(tablero, posicionDisparo, "X");
      result = 2;
      alert("Hundido!");
      if (
        !compruebaBarcoHundido4(tablero, posicionDisparo) &&
        compruebaBarcoHundido3(tablero, posicionDisparo)
      ) {
        dest--;
      } else if (
        compruebaBarcoHundido2(tablero, posicionDisparo) &&
        !compruebaBarcoHundido3(tablero, posicionDisparo) &&
        !compruebaBarcoHundido4(tablero, posicionDisparo)
      ) {
        acor--;
      } else if (
        compruebaBarcoHundido1(tablero, posicionDisparo) &&
        !compruebaBarcoHundido2(tablero, posicionDisparo) &&
        !compruebaBarcoHundido3(tablero, posicionDisparo) &&
        !compruebaBarcoHundido4(tablero, posicionDisparo)
      ) {
        frag--;
      }
    }
    shotsleft--;
    total[0] = shotsleft;
    total[1] = hits;
    total[2] = result;
    total[3] = dest;
    total[4] = acor;
    total[5] = frag;
    return total;
  }
export   function jugar() {
    let tablero10 = generarTablero(16, 16, "*");
    colocarBarcoDe4(tablero10);
    colocarBarcosDe3(tablero10);
    colocarBarcosDe2(tablero10);
    colocarBarcosDe1(tablero10);
    console.table(tablero10);
    for (let i = 3; i < tablero10.length - 3; i++) {
      for (let j = 3; j < tablero10[i].length - 3; j++) {
        tableroDeJuego.innerHTML += `<button class="casilla" id="casilla-${i}-${j}">?</button>`;
      }
    }
    let disparosRestantes = 50;
    let barcosHundidos = 0;
    let disparoX = 0;
    let disparoY = 0;
    let resultado = 0;
    let dest = 2;
    let acor = 3;
    let frag = 4;
    let barcos = document.querySelectorAll("span");
    barcos.forEach((element) => {
      element.style.opacity = "1";
    });
    let barcoInicial = document.querySelectorAll(".tipos-de-barcos");
    for (let i = 0; i < 4; i++) {
      barcoInicial[i].innerHTML = `${i + 1}`;
    }
    muestraDisparos(disparosRestantes);
    muestraBarcos(barcosHundidos);
    for (let i = 3; i < tablero10.length - 3; i++) {
      for (let j = 3; j < tablero10[i].length - 3; j++) {
        const boton = document.getElementById(`casilla-${i}-${j}`);
        boton.addEventListener("click", () => {
          disparoX = i;
          disparoY = j;
          let disparo = { x: disparoX, y: disparoY };
  
          let total = disparar(
            tablero10,
            disparo,
            disparosRestantes,
            barcosHundidos,
            resultado,
            dest,
            acor,
            frag
          );
          disparosRestantes = total[0];
          barcosHundidos = total[1];
          resultado = total[2];
          dest = total[3];
          acor = total[4];
          frag = total[5];
          console.log(total);
          switch (resultado) {
            case 0:
              boton.innerText = "≋";
              boton.className = "agua";
              break;
            case 1:
              boton.className = "hundido";
              boton.innerHTML = "";
              break;
            case 2:
              boton.className = "hundido";
              boton.innerHTML = "";
              muestraBarcosHundidos(tablero10, disparo, dest, acor, frag);
              break;
          }
          muestraBarcos(barcosHundidos);
          muestraDisparos(disparosRestantes);
  
          if (compruebaFinal(barcosHundidos, disparosRestantes) === true) {
            let seguir = prompt("¿Jugar otra vez?(Y/N)");
            if (seguir === "Y" || seguir === `y`) {
              tableroDeJuego.innerHTML = "";
              jugar();
            } else alert("Adios!");
          }
        });
      }
    }
  }
  function obtenerCaracterEnPosicion(tablero, posicion) {
    return tablero[posicion.x][posicion.y];
  }

 