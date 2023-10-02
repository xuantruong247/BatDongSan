const express = require("express")
const ctrl = require("../controllers/categoryController")
const router = express.Router()

router.get("/", ctrl.getCategories)
router.post("/create", ctrl.createCategory)
router.delete("/delete/:cid", ctrl.deletedCategory)
router.put("/update/:cid", ctrl.updatedCategory)

module.exports = router