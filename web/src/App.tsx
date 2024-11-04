import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | guest-list" />
      <Toaster richColors duration={3000} />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
