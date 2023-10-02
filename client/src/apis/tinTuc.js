import axios from "../axios"

export const apiGetBlogs = () => axios({
    url: "/blog/",
    mothod: "get"
})