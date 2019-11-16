
const router = require('express').Router()
const Contacts = require('../models/contacts')

// Defining api route for /api/contacts
router.get('/contacts', (req, res) => {
    Contacts.find({}, (err, data) => {
        if (err) console.log("Failed to retrieve contacts")
        console.log("Successfully to retrieve all contacts")
        res.send(data)
    })
})

module.exports = router