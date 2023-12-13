const mongoose = require('mongoose')

const {Schema} = mongoose;
const EngineerSchema = mongoose.Schema({
    email:{
        type: String,
        required : true 
    },
    password : {
        type : String,
        required : true
    },
    fullName:{
        type : String,
        required : true
    },
    userName:{
        type : String,
        required : true
    }
})

module.exports = mongoose.model("EngineerRegister" , EngineerSchema);