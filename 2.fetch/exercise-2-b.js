

async function obtener(url) {
    const respuesta = await fetch(url);
    const respuestaParseada = await respuesta.json();
    for (let i = 0; i < respuestaParseada.country.length; i++) {
      const p = document.createElement("p");
      div.appendChild(p);
      p.innerHTML = `El nombre ${input2.value} tiene un ${Math.round(
        respuestaParseada.country[i].probability * 100
      )}% de probabilidad de ser de ${respuestaParseada.country[i].country_id}`;
    }
  }

const baseUrl = "https://api.nationalize.io?name=";
const input = document.getElementsByTagName("input");
const input2 = input[0];
const boton = document.getElementsByTagName("button");
const boton2 = boton[0];
const div = document.getElementById("container");

boton2.addEventListener("click", () => {
  div.innerHTML = "";
  const finalUrl = baseUrl + input2.value;
  obtener(finalUrl);
});
