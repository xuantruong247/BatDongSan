import axios from "../axios"

export const apiGetBlogs = ({ page = 1, limit = 6 }) => axios({
    url: "/blog/",
    mothod: "get",
    params: { page, limit }
})

export const apiGetBlogsFeatured = () => axios({
    url: "/blog/",
    mothod: "get",
})

export const apiGetCurrentBlog = (bid) => axios({
    url: "/blog/" + bid,
    mothod: "get",
})