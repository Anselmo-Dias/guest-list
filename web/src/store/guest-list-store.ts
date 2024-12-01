import { create } from 'zustand'

import { api } from '../lib/axios'

interface IBond {
  id: string
  name: string
  age: number | null
  bond: string
}

interface IGuestList {
  users: {
    id: string
    name: string
    age: number | null
    message: string
    bond: IBond[]
  }[]
}

interface IGuestListStore {
  getAllGuestList: () => Promise<IGuestList>
  deleteGuest: (id: string) => Promise<void>
}

export const guestListStore = create<IGuestListStore>(() => ({
  getAllGuestList: async () => {
    const response = await api.get<IGuestList>('/guest')

    return response.data
  },

  deleteGuest: async (id: string) => {
    await api.delete(`/guest/${id}`)
  }
}))
