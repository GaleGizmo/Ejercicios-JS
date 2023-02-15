export async function cargarPokemons() {
  const pokemons = [];
  for (let i=1;i<151;i++) {
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${i}`
    );

    const pokemonOk = await pokemon.json();
    
    pokemons.push(pokemonOk);
  }

  const pokemonsFiltered= pokemons.map((result)=>({
    name:result.name,
    ability: result.abilities[0].ability.name,
    height:result.height,
    image:result.sprites.front_default,
    hp: result.stats[0].base_stat,
    attack: result.stats[1].base_stat,
    defense: result.stats[2].base_stat,
    speed: result.stats[5].base_stat,
    weight: result.weight
  }))
  return pokemonsFiltered
}