import { create } from 'zustand'

import { api } from '../lib/axios'

interface ISignInProps {
  keyword: string
}

interface ISignInStore {
  signIn: (data: ISignInProps) => Promise<void>
}

export const signInStore = create<ISignInStore>(() => ({
  signIn: async ({ keyword }: ISignInProps) => {
    const response = await api.post('/sign-in', { keyword })

    localStorage.setItem('token', response.data.token)
  },
}))
