import { useRouteError } from 'react-router-dom'

type RouteError = {
  statusText?: string
  message?: string
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occured.</p>
      <p>{error.statusText || error.message || 'Unknown error'}</p>
    </div>
  )
}
