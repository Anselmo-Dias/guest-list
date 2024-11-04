import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/auth'
import { Home } from './pages/app/home'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <SignIn />,
      },
    ],
  },

  {
    path: '/',
    element: <Home />,
  },
])
