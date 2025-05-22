import Header from '../../components/header/Header.tsx'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff'
          }
        }}
      />
      <main>
        <Outlet />
      </main>
    </>
  )
}
