import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/Olga-front/fake-api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/posts')
  },
  getEvent(id) {
    return apiClient.get('/posts/' + id)
  }
}
