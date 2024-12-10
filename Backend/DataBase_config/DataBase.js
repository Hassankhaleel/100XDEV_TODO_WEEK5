const mongoose = require("mongoose")
const db = mongoose.connect("mongodb+srv://Hassan:Hassan@todocluster.kavva.mongodb.net/")
    .then(() => {
        console.log("Database is connected");

    }).catch(() => {
        console.log("database is diconeted");

    })
// mongoose.connection.on("connected", () => console.log("DATAbase in connected"))
// mongoose.connection.on("disconnected", () => console.log("Database is Dis Connected"))
module.exports = db;
