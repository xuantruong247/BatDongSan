import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:7979"
})

export default instance