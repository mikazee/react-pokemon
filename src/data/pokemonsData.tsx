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
    ],
    isFavorite: true,
    isComparison: true
  },
  {
    id: '0002',
    name: 'Charmander',
    height: 0.6,
    weight: 8.5,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
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
    id: '0003',
    name: 'Squirtle',
    height: 0.5,
    weight: 9.0,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
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
    id: '0004',
    name: 'Pikachu',
    height: 0.4,
    weight: 6.0,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
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
    id: '0005',
    name: 'Jigglypuff',
    height: 0.5,
    weight: 5.5,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
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
    id: '0006',
    name: 'Meowth',
    height: 0.4,
    weight: 4.2,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png',
    stats: [
      { name: 'HP', value: 40 },
      { name: 'Attack', value: 45 },
      { name: 'Defense', value: 35 },
      { name: 'Speed', value: 90 },
      { name: 'Special Attack', value: 40 },
      { name: 'Special Defense', value: 40 }
    ],
    isFavorite: true,
    isComparison: false
  },
  {
    id: '0007',
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
    ],
    isFavorite: false,
    isComparison: true
  },
  {
    id: '0008',
    name: 'Machop',
    height: 0.8,
    weight: 19.5,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
    stats: [
      { name: 'HP', value: 70 },
      { name: 'Attack', value: 80 },
      { name: 'Defense', value: 50 },
      { name: 'Speed', value: 35 },
      { name: 'Special Attack', value: 35 },
      { name: 'Special Defense', value: 35 }
    ],
    isFavorite: false,
    isComparison: false
  },
  {
    id: '0009',
    name: 'Geodude',
    height: 0.4,
    weight: 20.0,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
    stats: [
      { name: 'HP', value: 40 },
      { name: 'Attack', value: 80 },
      { name: 'Defense', value: 100 },
      { name: 'Speed', value: 20 },
      { name: 'Special Attack', value: 30 },
      { name: 'Special Defense', value: 30 }
    ],
    isFavorite: true,
    isComparison: false
  },
  {
    id: '0010',
    name: 'Slowpoke',
    height: 1.2,
    weight: 36.0,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png',
    stats: [
      { name: 'HP', value: 90 },
      { name: 'Attack', value: 65 },
      { name: 'Defense', value: 65 },
      { name: 'Speed', value: 15 },
      { name: 'Special Attack', value: 40 },
      { name: 'Special Defense', value: 40 }
    ],
    isFavorite: false,
    isComparison: false
  }
]
