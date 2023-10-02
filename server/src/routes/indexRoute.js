const productRouter = require(".//productRouter")
const blogRouter = require(".//blogRouter")
const categoryRouter = require("./categoryRouter")
const userRouter = require("./userRouter")

const indexRoutes = (app) => {
    app.use("/product", productRouter)
    app.use("/blog", blogRouter)
    app.use("/category", categoryRouter)
    app.use("/user",userRouter)
}

module.exports = indexRoutes