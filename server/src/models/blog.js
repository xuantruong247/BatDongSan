const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
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
    numberViews: {
        type: Number,
        default: 0
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Blog", blogSchema)