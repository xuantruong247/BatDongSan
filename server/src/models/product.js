const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: { type: Array, required: true, },
    imageThum: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Product", productSchema)