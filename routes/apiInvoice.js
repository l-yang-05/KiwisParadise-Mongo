
const router = require('express').Router()


// Defining api route for /api/productinvoice
router.get('/productinvoice', (req, res) => {
    const { name, quantity } = req.query
    const sqlQuery = `SELECT ecom_db.Products.product_name, ROUND(SUM((ecom_db.Price.price * .08 * ${quantity} ) +  ecom_db.Price.price), 2) AS Invoice FROM ecom_db.Price INNER JOIN ecom_db.Products
       ON ecom_db.Price.Products_products_id = ecom_db.Products.products_id
       WHERE ecom_db.Products.product_name = "${name}"`

    connection.query(sqlQuery, (err, data) => {
        if (err) throw new Error(`${req.statusCode}: Page did not load properly`)
        res.json(data)
    })
})

module.exports = router