import axios from 'axios'
import { config } from '../services/config'

const getPosts = async () => {
  try {
    const res = await axios.get(`${config.API_URL}/posts/`)
    const posts = res.data
    const newPosts = Object.assign(posts)
    return newPosts
  } catch (error) {
    console.log('users', error.message)
  }
}

export const postByUser = async key => {
  const res = await getPosts()
  const filterPost = res.filter(
    post => post.userId === key
  )
  const post = filterPost[0]
  return post
}
