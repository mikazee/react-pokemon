import { Pokemon, PokemonDetails } from '../types'

export const pokemonsListData: Pokemon[] = [
  { id: 1, name: 'Bulbasaur', isFavorite: true, isComparison: true },
  { id: 2, name: 'Charmander', isFavorite: true, isComparison: false },
  { id: 3, name: 'Squirtle', isFavorite: false, isComparison: false },
  { id: 4, name: 'Pikachu', isFavorite: true, isComparison: false },
  { id: 5, name: 'Jigglypuff', isFavorite: true, isComparison: false },
  { id: 6, name: 'Meowth', isFavorite: true, isComparison: false },
  { id: 7, name: 'Psyduck', isFavorite: false, isComparison: true },
  { id: 8, name: 'Machop', isFavorite: false, isComparison: false },
  { id: 9, name: 'Geodude', isFavorite: true, isComparison: false },
  { id: 10, name: 'Slowpoke', isFavorite: false, isComparison: false }
]

export const mockPokemons: PokemonDetails[] = [
  {
    id: '0001',
    name: 'Bulbasaur',
    height: 0.7,
    weight: 6.9,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    stats: [
      { name: 'HP', value: 45 },
      { name: 'Attack', value: 49 },
      { name: 'Defense', value: 49 },
      { name: 'Speed', value: 45 },
      { name: 'Special Attack', value: 65 },
      { name: 'Special Defense', value: 65 }
    ]
  },
  {
    id: '0054',
    name: 'Psyduck',
    height: 0.8,
    weight: 19.6,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png',
    stats: [
      { name: 'HP', value: 50 },
      { name: 'Attack', value: 52 },
      { name: 'Defense', value: 48 },
      { name: 'Speed', value: 55 },
      { name: 'Special Attack', value: 65 },
      { name: 'Special Defense', value: 50 }
    ]
  }
]
