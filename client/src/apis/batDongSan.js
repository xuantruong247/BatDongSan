import axios from "../axios"

export const apiGetProducts = (category) => axios({
    url: "/product/",
    mothod: "get", params: { category }
})

export const apiGetProductsSortViews = () => axios({
    url: "/product/sortViews",
    mothod: "get", 
})

export const apiGetCurrent = (pid) => axios({
    url: "/product/" + pid,
    mothod: "get"
})

