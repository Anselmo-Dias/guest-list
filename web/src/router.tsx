import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { GuestList } from './pages/app/guest-list/guest-list'
import { Home } from './pages/app/home'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },

  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },

  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        path: 'guest-list',
        element: <GuestList />,
      },
    ],
  },
])
