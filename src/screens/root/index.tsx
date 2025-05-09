import Header from '../../components/header/Header.tsx'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
