const mongoose = require("mongoose")

const WardSchema = new mongoose.Schema({
    wardName : {
        type : String,
        required : true,
    },

    wardNumber : {
        type : String,
        required : true,
    },

    wardCapacity : {
        type : Number,
        required : true,
    },

    headDocName : {
        type : String,
        required : true,
    },

    numberOfEmp : {
        type : Number,
        required : true,
    },

})

module.exports = mongoose.model("Ward", WardSchema)