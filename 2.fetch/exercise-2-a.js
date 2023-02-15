
async function obtener(url) {
    const respuesta = await fetch(url);
    const respuestaParseada = await respuesta.json();
    console.log(respuestaParseada);
  }
  

const baseUrl = "https://api.nationalize.io?name=";
const input = document.getElementsByTagName("input");
const input2 = input[0];
const boton = document.getElementsByTagName("button");
const boton2 = boton[0];
boton2.addEventListener("click", () => {
  const finalUrl = baseUrl + input2.value;
  obtener(finalUrl); 
});


