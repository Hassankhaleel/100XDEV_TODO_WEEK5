const express = require('express')
const app = express()
const db = require('./DataBase_config/DataBase')
app.use(express.json())

const TodoApis = require("./Tdos_api/TodosApi")
const Inputvalider = require("./Tdos_api/InputValidZod")


app.use('/TodoApis', TodoApis)



app.listen(3000, () => {
    console.log("server is urnning on port 3000");

})