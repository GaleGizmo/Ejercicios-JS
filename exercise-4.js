async function colocaPlanetas() {
  const planetasRaw = await fetch("http://localhost:3000/planets");
  const planets = await planetasRaw.json();
  for (const planet of planets) {
    const nombrePlaneta = document.createElement("h1");
    nombrePlaneta.innerHTML = planet.name;
    const imagenPlaneta = document.createElement("img");
    imagenPlaneta.className = "planet-image";
    imagenPlaneta.setAttribute("src", planet.image);
    const planeta = document.createElement("figure");
    divPlanetas.appendChild(planeta);
    planeta.appendChild(nombrePlaneta);
    planeta.appendChild(imagenPlaneta);
    imagenPlaneta.addEventListener("click", () => {
      muestraPersonajes(planet.id);
    });
  }
}
const divPlanetas = document.querySelector(".planets");
const buscador = document.querySelector(".search");
const characters = document.querySelector(".characters");

colocaPlanetas();
async function muestraPersonajes(idPlaneta) {
  const personajesRaw = await fetch(
    `http://localhost:3000/characters?idPlanet=${idPlaneta}`
  );
  const personajes = await personajesRaw.json();

  buscador.style.display = "flex";
  characters.innerHTML = "";
  for (const item of personajes) {
    const card = document.createElement("div");
    card.className = "character";
    const imagenPersonaje = document.createElement("img");
    imagenPersonaje.className = "character-img";
    const nombrePersonaje = document.createElement("p");
    nombrePersonaje.className = "character-nombre";
    imagenPersonaje.setAttribute("src", item.avatar);
    nombrePersonaje.innerText = item.name;
    characters.appendChild(card);
    card.appendChild(imagenPersonaje);
    card.appendChild(nombrePersonaje);

    switch (idPlaneta) {
      case 1:
        characters.style.margin = "0 67% 0 0";
        card.style.maxWidth = "50%";
        buscador.style.marginLeft='0'
        break;
      case 2:
        buscador.style.marginLeft = "33%";
        characters.style.margin = "0 auto";
        // card.style.maxWidth="16.5%"
        break;
      case 3:
        buscador.style.marginLeft = "67%";
        characters.style.margin = "0 0 0 67%";
        break;
    }
    // console.log(characters.getBoundingClientRect(), item.name, nombrePersonaje.getBoundingClientRect());
    let mostrarComentario = false;
    const comentario = document.createElement("p");
    comentario.className = "character-description";
    comentario.innerText = item.description;
    imagenPersonaje.addEventListener("click", () => {
      if (mostrarComentario) {
        comentario.style.display = "none";
        mostrarComentario = false;
      } else {
        comentario.style.display = "inline";
        nombrePersonaje.appendChild(comentario);
        if (
          nombrePersonaje.getBoundingClientRect().left <
          characters.getBoundingClientRect().width / 2
        ) {
          comentario.style.left = "0";
        } else {
          comentario.style.left = `-${
            comentario.getBoundingClientRect().width / 2
          }px`;
        }

        mostrarComentario = true;
      }
    });
  }
  
}
