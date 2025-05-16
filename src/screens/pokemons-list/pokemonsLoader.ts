export async function pokemonsListLoader() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')

  if (!res.ok) {
    throw new Error('Could not fetch pokemons')
  }
  const pokemons = await res.json()
  return pokemons
}
