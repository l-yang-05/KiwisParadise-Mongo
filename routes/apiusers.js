const router = require('express').Router()
const Users = require('../models/users')

// Defining api route for /api/products
router.get('/users', (req, res) => {
    Users.find({}, (err, data) => {
        if (err) console.log("Failed retrieve users")
        console.log("Successfully retrieve users")
        res.send(data)
    })
})

module.exports = router