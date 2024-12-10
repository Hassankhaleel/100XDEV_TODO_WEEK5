const mongoose = require('mongoose')
// const { strict } = require('../Tdos_api/InputValidZod')

const TodoSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Discription: { type: String }
}, { strict: "throw" })//thsi will throw error when we put wrn/misspelled key vwlues
const TodoSchemaModel = new mongoose.model('Todos', TodoSchema)
module.exports = TodoSchemaModel