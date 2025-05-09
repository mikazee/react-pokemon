import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from '../screens/root'
import { PokemonsListPage } from '../screens/pokemons-list'
import { pokemonsLoader } from '../screens/pokemons-list/pokemonsLoader.ts'
import { FavoritePokemonsPage } from '../screens/favorite-pokemons-list'
import PokemonsComparisonPage from '../screens/compare-pokemons'
import { favoritePokemonsLoader } from '../screens/favorite-pokemons-list/favoritePokemonsLoader.ts'
import { pokemonsComparisonLoader } from '../screens/compare-pokemons/comparePokemonsLoader.ts'
import ErrorPage from '../screens/error-page'
import PokemonDetailsPage, { pokemonDetailsLoader } from '../screens/pokemon-details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'pokemons',
        element: <PokemonsListPage />,
        loader: pokemonsLoader
      },
      {
        path: 'pokemon/:id',
        element: <PokemonDetailsPage />,
        loader: pokemonDetailsLoader
      },
      {
        path: 'favorites',
        element: <FavoritePokemonsPage />,
        loader: favoritePokemonsLoader
      },
      {
        path: 'comparison',
        element: <PokemonsComparisonPage />,
        loader: pokemonsComparisonLoader
      }
    ]
  }
])

export const RootNavigation = () => {
  return <RouterProvider router={router} />
}
