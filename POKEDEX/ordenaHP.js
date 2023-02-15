export function ordenaHP(listado, orden) {
  let vida = listado.map((pokemon) => pokemon.hp);

  if (orden === "up") {
    vida.sort(function (a, b) {
      return a - b;
    });
    let listadoOrdenado = [];
    for (const dato of vida) {
      for (const pokemon of listado) {
        if (dato === pokemon.hp && !listadoOrdenado.includes(pokemon)) {
          listadoOrdenado.push(pokemon);
        }
      }
    }
    return listadoOrdenado;
  } else {
    vida.sort(function (a, b) {
      return a - b;
    });
    vida.reverse();
    let listadoOrdenado = [];
    for (const dato of vida) {
      for (const pokemon of listado) {
        if (dato === pokemon.hp && !listadoOrdenado.includes(pokemon)) {
          listadoOrdenado.push(pokemon);
        }
      }
    }
    return listadoOrdenado;
  }
}
