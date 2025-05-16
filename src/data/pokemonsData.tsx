import { PokemonDetails } from '../types'

export const mockPokemons: PokemonDetails[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    height: 0.7,
    weight: 6.9,
    stats: [
      { name: 'HP', value: 45 },
      { name: 'Attack', value: 49 },
      { name: 'Defense', value: 49 },
      { name: 'Speed', value: 45 },
      { name: 'Special Attack', value: 65 },
      { name: 'Special Defense', value: 65 }
    ],
    isFavorite: true,
    isComparison: true
  },
  {
    id: 2,
    name: 'Charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    height: 0.6,
    weight: 8.5,
    stats: [
      { name: 'HP', value: 39 },
      { name: 'Attack', value: 52 },
      { name: 'Defense', value: 43 },
      { name: 'Speed', value: 65 },
      { name: 'Special Attack', value: 60 },
      { name: 'Special Defense', value: 50 }
    ],
    isFavorite: true,
    isComparison: false
  },
  {
    id: 3,
    name: 'Squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    height: 0.5,
    weight: 9.0,
    stats: [
      { name: 'HP', value: 44 },
      { name: 'Attack', value: 48 },
      { name: 'Defense', value: 65 },
      { name: 'Speed', value: 43 },
      { name: 'Special Attack', value: 50 },
      { name: 'Special Defense', value: 64 }
    ],
    isFavorite: false,
    isComparison: false
  },
  {
    id: 4,
    name: 'Pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    height: 0.4,
    weight: 6.0,
    stats: [
      { name: 'HP', value: 35 },
      { name: 'Attack', value: 55 },
      { name: 'Defense', value: 40 },
      { name: 'Speed', value: 90 },
      { name: 'Special Attack', value: 50 },
      { name: 'Special Defense', value: 50 }
    ],
    isFavorite: true,
    isComparison: false
  },
  {
    id: 5,
    name: 'Jigglypuff',
    url: 'https://pokeapi.co/api/v2/pokemon/39',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
    height: 0.5,
    weight: 5.5,
    stats: [
      { name: 'HP', value: 115 },
      { name: 'Attack', value: 45 },
      { name: 'Defense', value: 20 },
      { name: 'Speed', value: 20 },
      { name: 'Special Attack', value: 45 },
      { name: 'Special Defense', value: 25 }
    ],
    isFavorite: true,
    isComparison: false
  },
  {
    id: 6,
    name: 'Meowth',
    url: 'https://pokeapi.co/api/v2/pokemon/52',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png',
    height: 0.4,
    weight: 4.2,
    stats: [
      { name: 'HP', value: 40 },
      { name: 'Attack', value: 45 },
      { name: 'Defense', value: 35 },
      { name: 'Speed', value: 90 },
      { name: 'Special Attack', value: 40 },
      { name: 'Special Defense', value: 40 }
    ],
    isFavorite: true
  }
]
