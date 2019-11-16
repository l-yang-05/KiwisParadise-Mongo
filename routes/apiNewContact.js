
const router = require('express').Router()


// Defining api route for /api/newContact
router.post('/contacts', (req, res, next) => {
    const { full_name, email, message } = req.body;
    const sqlQuery = `INSERT INTO ecom_db.Contacts (full_name, email, message) VALUES (?, ?, ?)`

    connection.query(sqlQuery, [full_name, email, message], (err, results) => {
        if (err) throw err;
        res.send(results)
    })
})

module.exports = router