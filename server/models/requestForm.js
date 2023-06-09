const mongoose = require('mongoose')

const formDetails = new mongoose.Schema(
    {
        FirstName:{
            type : String,
            required : true,
        },
        LastName:{
            type : String,
            required : true,
        },
        Email:{
            type : String,
            required : true,
        },
        Pid:{
            type : String,
            required : true,
        },
        Purpose:{
            type : String,
            required : true,
        },
      
    }
)
module.exports = mongoose.model("form",formDetails)