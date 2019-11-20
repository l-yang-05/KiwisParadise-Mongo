
const router = require('express').Router()
const Products = require('../models/products')

// Defining api route for /api/products
router.get('/products', (req, res) => {
    Products.find({}, (err, data) => {
        if (err) console.log("Failed retrieve products")
        console.log("Successfully retrieve products")
        res.send(data)
    })
})

module.exports = router