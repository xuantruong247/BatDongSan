const Blog = require("../models/blog")
const asyncHandler = require("express-async-handler");
const slugify = require("slugify")


const createBlog = asyncHandler(async (req, res) => {
    const { name, description } = req.body

    if (!name || !description) throw new Error("Missing text")

    const imageThum = req.files.imageThum[0].path
    if (imageThum) {
        req.body.imageThum = imageThum
    }
    if (req.body && req.body.name) {
        req.body.slug = slugify(req.body.name)
    } else {
        req.body.slug = slugify(name)
    }
    const response = await Blog.create({ name, description, slug: req.body.slug, imageThum })
    return res.status(200).json({
        success: response ? true : false,
        createBlog: response ? response : "Cannot create new Blog"
    })
})


const updateBlog = asyncHandler(async (req, res) => {
    const { bid } = req.params
    const file = req?.files

    if (file) {
        if (file.imageThum) {
            req.body.imageThum = file.imageThum[0].path
        }
    }

    const updateFields = { ...req.body }

    const response = await Blog.findByIdAndUpdate(bid, updateFields, { new: true })
    return res.status(200).json({
        success: response ? true : false,
        updatedBlog: response ? response : "Cannot update Blog"
    })
})


const getBlogs = asyncHandler(async (req, res) => {
    const { page = 1, limit = 6 } = req.query
    let query = Blog.find()
    const counts = await Blog.find().countDocuments()
    query = query.limit(parseInt(limit)).skip((page - 1) * limit)
    const response = await query.exec()
    return res.status(200).json({
        success: response ? true : false,
        getBlogs: response ? response : "Cannot get Blog",
        counts
    })
})


const getCurrentBlog = asyncHandler(async (req, res) => {
    const { bid } = req.params
    console.log(bid);
    const blog = await Blog.findByIdAndUpdate(bid, { $inc: { numberViews: 1 } }, { new: true })
    return res.status(200).json({
        success: blog ? true : false,
        getCurrentBlog: blog ? blog : "Cannot get Blog",
    })
})


const deleteBlog = asyncHandler(async (req, res) => {
    const { bid } = req.params
    if (!bid) throw new Error("Product not found")
    const response = await Blog.findByIdAndDelete(bid)
    return res.status(200).json({
        success: response ? true : false,
        deletedProduct: response ? response : "Cannot get product",
    })
})


module.exports = {
    createBlog,
    updateBlog,
    getBlogs,
    getCurrentBlog,
    deleteBlog
}