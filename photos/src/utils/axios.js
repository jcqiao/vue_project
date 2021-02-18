import axios from 'axios'
import store from '../store'

export const myAxios = axios.create({
  baseURL: '/api',
  timeout:5000
})

myAxios.interceptors.response.use(res => {
  return res.data
})

myAxios.interceptors.request.use(config => {
  const token = store.state.token
  console.log('拦截',token)
  if (token) {
    config.headers.authorization = "Bearer " + token
  }
  return config
})