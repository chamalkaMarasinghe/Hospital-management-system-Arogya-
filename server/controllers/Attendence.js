const AttendenceSchema = require("../models/Attendence")
const mongoose = require("mongoose")
const Employee = require("../models/Employee")

const insertatt =async(req,res) =>{
    try {
        const{EmpId,empname,title,arrivied_tme,leave_time,leaves} = req.body
        const newatt = await AttendenceSchema.create({EmpId,empname,title,arrivied_tme,leave_time,leaves})
        res.status(202).json({"newatt":newatt})
    } catch (error) {
        res.status(500).json({"msg":error.message})
    }
}
const getatt = async(req,res) =>{
    try {
        const resultSet = await AttendenceSchema.find({})
        res.status(200).json({"result":resultSet})
    } catch (error) {
        res.status(500).json({"msg":error})
    }
}
const deleteatt = async(req,res) =>{
    try {
        const{empID} = req.params
        const att = await AttendenceSchema.findOneAndDelete({_id : empID})
        res.status(200).json({"msg" : "Employee Attendence Deleted","att" : att})
    } catch (error) {
        res.status(500).json({"msg" : error.message})
        
    }
}

module.exports = {insertatt,getatt,deleteatt}