
const mongoose = require('mongoose')

const model = mongoose.model
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    full_name: { type: String, required: true },
    email: String,
    message: String
}, { collection: 'contacts' })


const ContactsModel = model("contacts", ContactSchema)

module.exports = ContactsModel
