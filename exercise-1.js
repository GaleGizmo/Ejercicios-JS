async function cargaApi() {
  let characters = [];

  for (let i = 1; i < 16; i++) {
    
    const character = await fetch(`https://swapi.dev/api/people/${i}`);
    const char = await character.json();
    const world = await fetch(char.homeworld);
    const planeta = await world.json();
    const cuantasPelis = await char.films.length;
    let peliculas = [];
    for (const film of char.films) {
      const movie = await fetch(film);
      const movieParsed = await movie.json();
      peliculas.push(movieParsed.title);
    }
    char.films = peliculas;
    char.homeworld = planeta.name;
    characters.push(char);
  }
  const filteredChar = characters.map((result) => ({
    nombre: result.name,

    mundo: result.homeworld,
    pelis: result.films,
  }));
  return filteredChar;
}

const contenedor = document.getElementById("container");
contenedor.style.opacity = "0";
const header = document.querySelector("header");

function pintaDatosPersonaje(personaje) {
  const planeta = document.createElement("p");
  const spanPlaneta = document.createElement("span");
  spanPlaneta.innerText = "PLANETA DE ORIGEN:";
  planeta.innerText = personaje.mundo;
  contenedor.appendChild(spanPlaneta);
  contenedor.appendChild(planeta);
  const linea = document.createElement("hr");
  contenedor.appendChild(linea);
  const spanPelis = document.createElement("span");
  spanPelis.innerText = "APARECE EN LAS PELÍCULAS:";
  contenedor.appendChild(spanPelis);
  for (const peli of personaje.pelis) {
    const pelicula = document.createElement("p");
    pelicula.innerText = peli;

    contenedor.appendChild(pelicula);
  }
}
const h1 = document.querySelector("h1");
h1.style.opacity = "0";
window.addEventListener("DOMContentLoaded", async () => {
  const starWarsCrew = await cargaApi();
  for (const item of starWarsCrew) {
    const nombrePersonaje = document.createElement("button");

    nombrePersonaje.innerHTML = item.nombre;
    header.appendChild(nombrePersonaje);
    nombrePersonaje.addEventListener("click", () => {
      contenedor.innerHTML = "";
      console.log(item);
      pintaDatosPersonaje(item);
    });
  }
  h1.style.opacity = "1";
  h1.style.animationName = "enlarge";
  contenedor.style.opacity = "1";
});
