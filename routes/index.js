
const express = require('express')
const usersCtrl = require('../controllers')
const verifyToken = require('../auth').verifyToken

const usersRouter = new express.Router()
const router = new express.Router()
const Products = require('../models/products')
const User = require('../models/users')
const Contacts = require('../models/contacts')



usersRouter.route('/').post(usersCtrl.create)

router.get('/products', async (req, res) => {
    try {
        let products = await Products.find();
        return res.send(products)

    }
    catch (err) {
        console.log(err)
    }
})


router.get('/contacts', async (req, res) => {
    try {
        let contact = await Contacts.find();
        return res.send(contact)
    }
    catch (err) {
        console.log(err)
    }
})

usersRouter.post('/authenticate', usersCtrl.authenticate)



usersRouter.use(verifyToken)

usersRouter.route('/').get(usersCtrl.index)

usersRouter.get('/users', async (req, res) => {
    try {
        let user = await User.find();
        return res.send(user)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/api/users', async (req, res) => {
    try {
        let user = await User.find();
        return res.send(user)

    }
    catch (err) {
        console.log(err)
    }
})


router.get('/api/products', async (req, res) => {
    try {
        let product = await Products.find();
        return res.send(product)

    }
    catch (err) {
        console.log(err)
    }
})

router.get('/api/contacts', async (req, res) => {
    try {
        let contact = await Contacts.find();
        return res.send(contact)

    }
    catch (err) {
        console.log(err)
    }
})

usersRouter.route('/:id').get(usersCtrl.show)

usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)

module.exports = usersRouter