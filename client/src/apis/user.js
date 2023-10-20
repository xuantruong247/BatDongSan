import axios from "../axios"

export const apiLogin = (data) => axios({
    url: "/blog/",
    mothod: "get",
    data
})