import { isAxiosError } from 'axios'
import { ComponentType, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { api } from '../lib/axios'

interface PrivateRouteProps {
  protectedComponent: ComponentType
}

function isAuthenticated() {
  return !!localStorage.getItem('token')
}

export function PrivateRoute({
  protectedComponent: ProtectedComponent,
}: PrivateRouteProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const message = error.response?.data?.message

          if (status === 401 && message === 'Unauthorized') {
            localStorage.removeItem('token')
            navigate('/auth/sign-in', { replace: true })
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  if (!isAuthenticated()) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return <ProtectedComponent />
}
