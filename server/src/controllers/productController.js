const Product = require("../models/product")
const asyncHandler = require("express-async-handler");
const slugify = require("slugify")


const createProduct = asyncHandler(async (req, res) => {
    const { name, description, category } = req.body

    if (!name || !description || !category) throw new Error("Missing text")

    const imageThum = req.files.imageThum[0].path
    if (imageThum) {
        req.body.imageThum = imageThum
    }
    if (req.body && req.body.name) {
        req.body.slug = slugify(req.body.name)
    } else {
        req.body.slug = slugify(name)
    }
    const response = await Product.create({ name, description, slug: req.body.slug, imageThum, category })
    return res.status(200).json({
        success: response ? true : false,
        createProduct: response ? response : "Cannot create new Product"
    })
})


const updateProduct = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const file = req?.files

    if (file) {
        if (file.imageThum) {
            req.body.imageThum = file.imageThum[0].path
        }
    }

    const updateFields = { ...req.body }

    const response = await Product.findByIdAndUpdate(pid, updateFields, { new: true })
    return res.status(200).json({
        success: response ? true : false,
        updatedProduct: response ? response : "Cannot update product"
    })
})


const getProducts = asyncHandler(async (req, res) => {
    const { page = 1, limit = 6, sortBy = 'views', sortOrder = 'desc', category } = req.query;

    let query = Product.find();

    // Tạo một danh sách các danh mục bạn muốn lọc
    const categoriesToFilter = ['dat-nen', 'dat-du-an'];

    // Thêm điều kiện lọc theo danh mục nếu category nằm trong danh sách categoriesToFilter
    if (categoriesToFilter.includes(category)) {
        query = query.where({ category });
    }

    // Sắp xếp theo trường sortBy và sortOrder
    query = query.sort({ [sortBy]: sortOrder });

    const counts = await Product.find(query).countDocuments();
    query = query.limit(parseInt(limit)).skip((page - 1) * limit);

    const response = await query.exec();
    return res.status(200).json({
        success: response ? true : false,
        getProducts: response ? response : "Cannot get product",
        counts
    });
});




const getCurrentProduct = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const product = await Product.findByIdAndUpdate(pid, { $inc: { views: 1 } }, { new: true })
    return res.status(200).json({
        success: product ? true : false,
        getCurrentProduct: product ? product : "Cannot get product",
    })
})


const deleteProduct = asyncHandler(async (req, res) => {
    const { pid } = req.params
    if (!pid) throw new Error("Product not found")
    const response = await Product.findByIdAndDelete(pid)
    return res.status(200).json({
        success: response ? true : false,
        deletedProduct: response ? response : "Cannot get product",
    })
})


module.exports = {
    createProduct,
    updateProduct,
    getProducts,
    getCurrentProduct,
    deleteProduct
}