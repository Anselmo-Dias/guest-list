import { create } from 'zustand'

import { api } from '../lib/axios'

interface IBond {
  name: string
  age: number
  bond: string
}

interface ICreateGuestBody {
  name: string
  age: number
  message: string
  bond: IBond[]
}

interface IHomeStore {
  createGuest: (data: ICreateGuestBody) => Promise<void>
}

export const homeStore = create<IHomeStore>(() => ({
  createGuest: async (data: ICreateGuestBody) => {
    await api.post('/guest', data)
  },
}))
