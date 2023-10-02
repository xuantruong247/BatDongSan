import axios from "../axios"

export const apiGetProducts = () => axios({
    url: "/product/",
    mothod: "get"
})

export const apiGetCurrent = (pid) => axios({
    url: "/product/" + pid,
    mothod: "get"
})