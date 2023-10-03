const express = require("express")
const ctrl = require("../controllers/productController")
const router = express.Router()
const uploader = require("../config/cloudinary.config")

router.get("/", ctrl.getProducts)
router.get("/sortViews", ctrl.getProductsSortViews)
router.get("/:pid", ctrl.getCurrentProduct)
router.post("/create", uploader.fields([
    { name: "imageThum", maxCount: 1 }
]), ctrl.createProduct)
router.delete("/delete/:pid", ctrl.deleteProduct)
router.put("/update/:pid", uploader.fields([
    { name: "imageThum", maxCount: 1 }

]), ctrl.updateProduct)

module.exports = router