const mongoose = require('mongoose')
const EmployeeSchema = new  mongoose.Schema({
    Firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    DOB : {
        type : String,
        required : true,
    },
    NIC : {
        type : String,
        required : true,
    },
    Address : {
        type : String,
        required : true,
    },
    Contactnumber : {
        type : Number,
        required : true,
        
    },
    Email : {
        type : String,
        required : true,
    },
    Qulification : {
        type : String,
        required : true,
    },
    remark : {
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true,
    },
})

module.exports =mongoose.model("Employee",EmployeeSchema)