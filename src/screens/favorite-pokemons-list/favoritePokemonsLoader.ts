import { pokemonsListData } from '../../data/pokemonsData.tsx'
import { Pokemon } from '../../types'

export const favoritePokemonsLoader = () => {
  return pokemonsListData.filter((pokemon: Pokemon) => pokemon.isFavorite)
}
