import axios from "../axios"

export const apiGetProducts = (category, { page = 1, limit = 6 }) => {
  return axios({
    url: "/product/",
    method: "get",
    params: { category, page, limit },
  });
};


export const apiGetProductsSortViews = () => axios({
  url: "/product/sortViews",
  mothod: "get",
})

export const apiGetCurrent = (pid) => axios({
  url: "/product/" + pid,
  mothod: "get"
})

export const apiUpdateProducts = (data, pid) => axios({
  url: "/product/update/" + pid,
  method: "put",
  data
})

export const apiCreateProduct = (data) => axios({
  url: "/product/create",
  method: "post",
  data
})

export const apiDeleteProduct = (pid) => axios({
  url: "/product/delete/" + pid,
  method: "delete",
})
