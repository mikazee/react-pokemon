import React from 'react'

type ErrorPageProps = {
  errorMessage?: string
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{errorMessage || 'Unknown error occurred'}</p>
    </div>
  )
}

export default ErrorPage
