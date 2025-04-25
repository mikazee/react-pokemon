import { Pokemon, PokemonDetails } from '../types'

export const pokemonsList: Pokemon[] = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Charmander' },
  { id: 3, name: 'Squirtle' },
  { id: 4, name: 'Pikachu' },
  { id: 5, name: 'Jigglypuff' },
  { id: 6, name: 'Meowth' },
  { id: 7, name: 'Psyduck' },
  { id: 8, name: 'Machop' },
  { id: 9, name: 'Geodude' },
  { id: 10, name: 'Slowpoke' }
]

export const mockPokemon: PokemonDetails = {
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
}
