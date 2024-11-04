import { Heart } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid h-screen grid-cols-2 max-md:grid-cols-1">
      <div className="flex h-full w-full flex-col justify-between border-r border-foreground/5 bg-muted bg-primary-image bg-cover bg-center bg-no-repeat p-10 text-muted-foreground">
        <div className="flex w-full items-center gap-2 max-md:justify-center">
          <Heart className="h-5 w-5 text-primary-foreground" />
          <span className="font-semibold text-primary-foreground">G&T</span>
        </div>

        <footer className="flex items-center text-sm text-primary-foreground max-md:justify-center">
          Lista de convidados &copy; G&T - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
