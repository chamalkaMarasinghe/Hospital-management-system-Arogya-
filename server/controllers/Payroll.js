const PayrollSchema = require("../models/Payroll")
const mongoose = require("mongoose")

const insertDet = async(req,res) =>{
    try {
        const {EmpID,Name,service_period,WorkingDays,WorkingHours,OT,Basic_Sal} = req.body
        const Salary = (((OT * WorkingHours)*WorkingDays) + Basic_Sal)
        const newDet = await PayrollSchema.create({EmpID,Name,service_period,WorkingDays,WorkingHours,OT,Basic_Sal,Salary})
        res.status(202).json({"newDet":newDet})

    } catch (error) {
        res.status(500).json({"msg":error.message})
        
    }
}

const updateDet = async(req,res)=>{
    try {
        const{empID}=req.params
        const{EmpID,Name,service_period,WorkingDays,WorkingHours,OT,Basic_Sal}= req.body
        const det = await PayrollSchema.findById(empID)
        det.EmpID = EmpID
        det.Name = Name
        det.service_period = service_period
        det.WorkingDays = WorkingDays
        det.WorkingHours = WorkingHours 
        det.OT = OT
        det.Basic_Sal = Basic_Sal
        await det.save()
        res.status(200).json({"details" : det})

    } catch (error) {
        res.status(500).json({"msg":error.message})
        
    }

}
const getDet = async(req,res) =>{
    try {
        const resultSet = await PayrollSchema.find({})
        res.status(200).json({"result":resultSet})
        
    } catch (error) {
        res.status(500).json({"msg":error})
        
    }
}
const deletedet =async(req,res)=>{
    try {
        const {empID}=req.params
        const det = await PayrollSchema.findOneAndDelete({_id:empID})
        res.status(200).json({"msg" : "Payment Deleted", "det" : det})
        
    } catch (error) {
        res.status(500).json({"msg" : error.message})
        
    }
}

module.exports =  {insertDet,updateDet,getDet,deletedet}
