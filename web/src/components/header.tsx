import { Contact, Home, Users } from 'lucide-react'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b font-mono">
      <div className="flex h-16 items-center gap-6 px-6">
        <p className="text-lg font-semibold antialiased">G&T</p>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/'}>
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>

          <NavLink to="/guest-list">
            <Users className="h-4 w-4" />
            Convidados
          </NavLink>

          <NavLink to="/contact">
            <Contact className="h-4 w-4" />
            Contato
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
