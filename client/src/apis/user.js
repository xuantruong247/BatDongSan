import axios from "../axios"

export const apiLogin = (data) => axios({
    url: '/user/login',
    method: 'post',
    data
})