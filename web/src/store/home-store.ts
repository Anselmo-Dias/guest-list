import { create } from 'zustand'

import { api } from '../lib/axios'

interface IBond {
  name: string
  age: number | null
  bond: string
}

interface ICreateGuestBody {
  name: string
  age: number | null
  message: string
  bond: IBond[]
}

interface IHomeStore {
  createGuest: (data: ICreateGuestBody) => Promise<void>
  logout: () => void
}

export const homeStore = create<IHomeStore>(() => ({
  createGuest: async (data: ICreateGuestBody) => {
    await api.post('/guest', data)
  },

  logout: () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
}))
