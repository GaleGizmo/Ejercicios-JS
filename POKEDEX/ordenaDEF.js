export function ordenaDEF(listado, orden) {
    let def = listado.map((pokemon) => pokemon.defense);
  
    if (orden === "up") {
      def.sort(function (a, b) {
        return a - b;
      });
      let listadoOrdenado = [];
      for (const dato of def) {
        for (const pokemon of listado) {
          if (dato === pokemon.defense && !listadoOrdenado.includes(pokemon)) {
            listadoOrdenado.push(pokemon);
          }
        }
      }
      return listadoOrdenado;
    } else {
      def.sort(function (a, b) {
        return a - b;
      });
      def.reverse();
      let listadoOrdenado = [];
      for (const dato of def) {
        for (const pokemon of listado) {
          if (dato === pokemon.defense && !listadoOrdenado.includes(pokemon)) {
            listadoOrdenado.push(pokemon);
          }
        }
      }
      return listadoOrdenado;
    }
  }
  
  