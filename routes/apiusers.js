const router = require('express').Router()
const Users = require('../models/users')
const userCtrl = require("../../controllers");
const verifyToken = require("../../auth").verifyToken


router.route("/").post(userCtrl.create);
router.route("/authenticate").post(userCtrl.authenticate);

router.use(verifyToken)


// Defining api route for /api/products
router.get('/users', (req, res) => {
    Users.find({}, (err, data) => {
        if (err) console.log("Failed retrieve users")
        console.log("Successfully retrieve users")
        res.send(data)
    })
})

module.exports = router