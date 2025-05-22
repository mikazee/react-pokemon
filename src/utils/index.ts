import { PokemonDetails, PokemonDetailsApiResponse, PokemonListItem } from '../types'
import { FavoriteStates } from '../store/favorite-pokemons/slice.ts'
import { CompareState } from '../store/compare-pokemons/slice.ts'

export const pokemonDetailsParse = (data: PokemonDetailsApiResponse): PokemonDetails => {
  return {
    id: data.id,
    name: data.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    height: data.height,
    weight: data.weight,
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat
    }))
  }
}

export const PokemonWithFavoriteAndCompare = (
  p: PokemonListItem | PokemonDetails,
  fav: FavoriteStates['list'],
  comp: CompareState['list']
) => ({
  ...p,
  isFavorite: fav.includes(p.id),
  isComparison: comp.some((pd) => pd.id === p.id)
})

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
