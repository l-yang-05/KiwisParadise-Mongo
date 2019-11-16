
const mongoose = require('mongoose')

const model = mongoose.model
const Schema = mongoose.Schema

const ProductsSchema = new Schema({
    product_name: { type: String, required: true },
    product_desc: { type: String, required: true },
    img: String,
    product_type: String,
    alt: String,
    price: Number
}, { collection: 'Products' })


const ProductsModel = model("Products", ProductsSchema)

module.exports = ProductsModel