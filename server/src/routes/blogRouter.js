const express = require("express")
const ctrl = require("../controllers/blogController")
const router = express.Router()
const uploader = require("../config/cloudinary.config")

router.get("/", ctrl.getBlogs)
router.get("/:bid", ctrl.getCurrentBlog)
router.post("/create", uploader.fields([
    { name: "imageThum", maxCount: 1 }
]), ctrl.createBlog)
router.delete("/delete/:bid", ctrl.deleteBlog)
router.put("/update/:bid", uploader.fields([
    { name: "imageThum", maxCount: 1 }

]), ctrl.updateBlog)

module.exports = router