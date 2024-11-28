import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  protectedComponent: ComponentType
}

function isAuthenticated() {
  return !!localStorage.getItem('token')
}

// eslint-disable-next-line
export function PrivateRoute({ protectedComponent: ProtectedComponent }: PrivateRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return <ProtectedComponent />
}
