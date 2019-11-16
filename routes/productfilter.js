
const router = require('express').Router()
const Products = require('../models/products')

// Defining api route for /api/productfilter
router.get('/productfilter', (req, res) => {
    const { type, price } = req.query

    if (price && !type) {
        Products.find({ price: price }, (err, data) => {
            if (err) console.log("Failed to retrieve price")
            console.log("Price was recieved")
            res.send(data)
        })
    } else if (type && !price) {
        Products.find({ product_type: type }, (err, data) => {
            if (err) console.log("Failed to retrieve all type")
            console.log("Type was retrieved")
            res.send(data)
        })
    } else if (type && price) {
        Products.find({ product_type: type, price: price }, (err, data) => {
            if (err) console.log("Both are not working :(")
            console.log("Both filters are recieved")
            res.send(data)
        })
    }
})

module.exports = router