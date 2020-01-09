import axios from 'axios'
import { config } from '../services/config'

export const getUsers = async () => {
  try {
    const res = await axios.get(`${config.API_URL}/users`)
    const users = res.data
    console.log('API users loaded')
    return users
  } catch (error) {
    console.log('users', error.message)
  }
}
