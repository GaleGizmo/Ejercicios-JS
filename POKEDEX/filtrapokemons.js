export function filtraPokemons(pokemons, filtro) {
    if (filtro === "") {
      return pokemons;
    } else {
      let pokemonsFiltrados = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().startsWith(filtro.toLowerCase());
      });
    return pokemonsFiltrados
    }
  }
