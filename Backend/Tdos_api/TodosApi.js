const express = require('express')
const db = require("../DataBase_config/DataBase")
const InputValidZod = require("./InputValidZod")
const DB_MODEL = require('../TodoSchema/TodoSchema')
const TodoRouter = express.Router()

TodoRouter.post('/POST_TODO', async (req, res) => {
    // console.log(req.body);

    let credentials = {
        Title: req.body.Title,
        Discription: req.body.Discription,
        // Test: "1213"//for testing purpose via schema 
    }
    // console.log(credentials, "credniatals");
    let ZodVal = InputValidZod.safeParse(credentials)

    if (ZodVal.success) {

        try {
            const Db_data_dispather = new DB_MODEL(credentials)
            const db_promise = await Db_data_dispather.save()
            res.send({ db_promiseData: db_promise })
            ////---another way uisng .then method--
            // .then((data) => {
            //     res.send(data)
            // }).catch((err) => {
            //     res.send(err)
            // })
        } catch (db_promise) {
            res.send({ db_promiseErro: db_promise })
        }


    } else {
        res.send({ zodvalidError: ZodVal.error.errors })
    }      //------------------
    // .THEN .CATCH
    // Db_data_dispather.save()
    //     .then((data) => res.send(data))
    //     .catch((err) => res.send(err))
    ////-----------------
    // ASYNC AWAIT




})

TodoRouter.get('/', async (req, res) => {
    ////----using asyn-await
    try {
        const db_data = await DB_MODEL.find()
        res.send(db_data)
    } catch (err) {
        res.send(err)
    }
    ////----using .then Method 
    // DB_MODEL.find().then(data => res.send(data)).catch(err => res.send(err)) 
})

module.exports = TodoRouter
