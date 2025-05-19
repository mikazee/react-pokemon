import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from '../screens/root'
import { PokemonsListPage } from '../screens/pokemons-list'
import { FavoritePokemonsPage } from '../screens/favorite-pokemons-list'
import PokemonsComparisonPage from '../screens/compare-pokemons'
import ErrorPage from '../screens/error-page'
import PokemonDetailsPage from '../screens/pokemon-details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PokemonsListPage />
      },
      {
        path: 'pokemon/:id',
        element: <PokemonDetailsPage />
      },
      {
        path: 'favorites',
        element: <FavoritePokemonsPage />
      },
      {
        path: 'comparison',
        element: <PokemonsComparisonPage />
      }
    ]
  }
])

export const RootNavigation = () => {
  return <RouterProvider router={router} />
}
