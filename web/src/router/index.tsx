import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '../pages/_layouts/app'
import { AuthLayout } from '../pages/_layouts/auth'
import { GuestList } from '../pages/app/guest-list/guest-list'
import { Home } from '../pages/app/home'
import { SignIn } from '../pages/auth/sign-in'
import { NotFound } from '../pages/notFound'
import { PrivateRoute } from './private-router'

export const router = createBrowserRouter([
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
    element: <PrivateRoute protectedComponent={Home} />,
  },

  {
    path: '',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'guest-list',
        element: <PrivateRoute protectedComponent={GuestList} />,
      },
    ],
  },
])
