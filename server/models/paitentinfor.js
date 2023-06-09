const mongoose = require("mongoose")

const paitentinforSchema = new mongoose.Schema({
    wardNumber : {
        type : String,
        required : true,
    },

    wardName : {
        type : String,
        required : true,
    },

    paitentName : {
        type : String,
        required : true,
    },

    headDocName : {
        type : String,
        required : true,
    },

  

})

module.exports = mongoose.model("Paitentinfor", paitentinforSchema)