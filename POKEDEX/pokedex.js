import { cargarPokemons } from "./api.js";
import { muestraPokemons } from "./muestrapokemons.js";
import { filtraPokemons } from "./filtrapokemons.js";
import { ordenaNombre } from "./ordenalfab.js";
import { ordenaHP } from "./ordenaHP.js";
import { ordenaATT } from "./ordenaATT.js";
import { ordenaDEF } from "./ordenaDEF.js";

window.addEventListener("DOMContentLoaded", async () => {
  const atrapalos = await cargarPokemons();
  muestraPokemons(atrapalos);
  const header = document.querySelector("header");
  header.style.display = "flex";
  //FILTRA POR NOMBRE
  const buscador = document.getElementById("buscador");
  buscador.addEventListener("keyup", () => {
    muestraPokemons(filtraPokemons(atrapalos, buscador.value));
  });

  //ORDENA POKEMONS ALFABETICAMENTE
  const ordenABC = document.getElementById("orden-alfabetico");
  ordenABC.addEventListener("click", () => {
    if (ordenABC.innerText === "ORDENAR A-Z") {
      muestraPokemons(ordenaNombre(atrapalos, "abc"));
      ordenABC.innerText = "ORDENAR Z-A";
    } else {
      muestraPokemons(ordenaNombre(atrapalos, "cba"));
      ordenABC.innerText = "ORDENAR A-Z";
    }
  });
  //ORDENA POKEMONS POR HP
  const ordenHP = document.getElementById("orden-hp");
  ordenHP.innerHTML = "ORDENAR HP <span id='flecha-hp' class='flecha'>🢁</span>";
  const flechaHP = document.getElementById("flecha-hp");

  ordenHP.addEventListener("click", () => {
    if (flechaHP.innerHTML === "🢁") {
      muestraPokemons(ordenaHP(atrapalos, "up"));
      flechaHP.innerHTML = "🢃";
    } else {
      muestraPokemons(ordenaHP(atrapalos, "down"));
      flechaHP.innerHTML = "🢁";
    }
  });

  //ORDENA POKEMONS POR ATAQUE
  const ordenATT = document.getElementById("orden-att");
  ordenATT.innerHTML =
    "ORDENAR ATAQUE <span id='flecha-att' class='flecha'>🢁</span>";
  const flechaATT = document.getElementById("flecha-att");
  ordenATT.addEventListener("click", () => {
    if (flechaATT.innerHTML === "🢁") {
      flechaATT.innerHTML = "🢃";
      muestraPokemons(ordenaATT(atrapalos, "up"));
    } else {
      muestraPokemons(ordenaATT(atrapalos, "down"));
      flechaATT.innerHTML = "🢁";
    }
  });

  //ORDENA POKEMONS POR DEFENSA
  const ordenDEF = document.getElementById("orden-def");
  ordenDEF.innerHTML =
    "ORDENAR DEFENSA <span id='flecha-def' class='flecha'>🢁</span>";
  const flechaDEF = document.getElementById("flecha-def");

  ordenDEF.addEventListener("click", () => {
    if (flechaDEF.innerHTML === "🢁") {
      muestraPokemons(ordenaDEF(atrapalos, "up"));
      flechaDEF.innerHTML = "🢃";
    } else {
      muestraPokemons(ordenaDEF(atrapalos, "down"));
      flechaDEF.innerHTML = "🢁";
    }
  });
});
