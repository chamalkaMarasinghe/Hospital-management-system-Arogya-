const mongoose =require('mongoose')
const AttendenceSchema = new mongoose.Schema({
    EmpId : {
        type : String,
        required : true,
    },
    empname : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    arrivied_tme : {
        type : String,
        required : true,
    },
    leave_time : {
        type : String,
        required : true,

    },
    leaves : {
        type : Number,
        required : true,
    },


})
module.exports = mongoose.model("Attendence",AttendenceSchema)