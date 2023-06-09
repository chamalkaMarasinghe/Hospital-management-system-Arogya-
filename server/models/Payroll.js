const mongoose =require('mongoose')
const PayrollSchema = new mongoose.Schema({
    EmpID  : {
        type :  String,
        required : true,
    },
    Name : {
        type : String,
        required : true,

    },
    service_period : {
        type : Number,
        required : true,

    },
    WorkingDays : {
        type : Number,
        required : true,

    },
    WorkingHours : {
        type : Number,
        required : true,

    },
    OT  : {
        type : Number,
        required : true,

    },
    Basic_Sal :{
        type :Number,
        required :true,
    },
    Salary : {
        type : Number,
        required :true,

    } 
})
module.exports = mongoose.model("Payement",PayrollSchema)
