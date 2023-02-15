export function ordenaATT(listado, orden) {
    let att = listado.map((pokemon) => pokemon.attack);
  
    if (orden === "up") {
      att.sort(function (a, b) {
        return a - b;
      });
      let listadoOrdenado = [];
      for (const dato of att) {
        for (const pokemon of listado) {
          if (dato === pokemon.attack && !listadoOrdenado.includes(pokemon)) {
            listadoOrdenado.push(pokemon);
          }
        }
      }
      return listadoOrdenado;
    } else {
      att.sort(function (a, b) {
        return a - b;
      });
      att.reverse();
      let listadoOrdenado = [];
      for (const dato of att) {
        for (const pokemon of listado) {
          if (dato === pokemon.attack && !listadoOrdenado.includes(pokemon)) {
            listadoOrdenado.push(pokemon);
          }
        }
      }
      return listadoOrdenado;
    }
  }