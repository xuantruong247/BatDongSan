const Category = require("../models/category")
const asyncHandler = require("express-async-handler")

const createCategory = asyncHandler(async (req, res) => {
    const { name } = req.body
    if (!name) throw new Error("Missing text")
    const response = await Category.create(req.body)
    return res.status(200).json({
        success: response ? true : false,
        createdCategory: response ? response : "Cannot create new category"
    })
})

const getCategories = asyncHandler(async (req, res) => {
    const response = await Category.find().select('name _id')
    return res.status(200).json({
        success: response ? true : false,
        getCategory: response ? response : "Cannot get all category"
    })
})


const updatedCategory = asyncHandler(async (req, res) => {
    const { cid } = req.params
    const response = await Category.findByIdAndUpdate(cid, req.body, { new: true })
    return res.status(200).json({
        success: response ? true : false,
        updateCategory: response ? response : "Cannot updated category"
    })
})


const deletedCategory = asyncHandler(async (req, res) => {
    const { cid } = req.params

    const response = await Category.findByIdAndDelete(cid)
    return res.status(200).json({
        success: response ? true : false,
        deletedCategory: response ? response : "Cannot delete category"
    })
})

module.exports = {
    createCategory,
    getCategories,
    updatedCategory,
    deletedCategory
}