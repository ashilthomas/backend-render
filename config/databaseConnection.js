const mongoose = require('mongoose')
const databaseConnection = ()=>{
    mongoose.connect('mongodb+srv://ashilthomas31:Vc2032YgkA0hjcA6@cluster0.lliryig.mongodb.net/signupdata')
    .then((res) => console.log(`database connected with ${res.connection.host}`))
    .catch((err) => console.log(err.message))
}

module.exports = databaseConnection
