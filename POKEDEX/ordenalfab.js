export function ordenaNombre(listado, orden) {
    let nombres = listado.map((pokemon) => pokemon.name);
  
    if (orden === "abc") {
      nombres.sort();
      let listadoOrdenado = [];
      for (const nombre of nombres) {
        for (const pokemon of listado) {
          if (nombre === pokemon.name) {
            listadoOrdenado.push(pokemon);
          }
        }
      }
      return listadoOrdenado;
    } else {
      nombres.sort();
      nombres.reverse();
      let listadoOrdenado = [];
      for (const nombre of nombres) {
        for (const pokemon of listado) {
          if (nombre === pokemon.name) {
            listadoOrdenado.push(pokemon);
          }
        }
      }
      return listadoOrdenado;
    }
  }
  