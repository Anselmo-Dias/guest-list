import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.request.use(
  async (config) => {
    const userTokenExpiration = await localStorage.getItem('token')

    if (userTokenExpiration) {
      config.headers.Authorization = `Bearer ${userTokenExpiration}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
