const EmployeeSchema = require("../models/Employee")
const mongoose = require("mongoose")

const getSpecificCategory = async(req, res) => {
    try {
        const {category} = req.params
        const result = await EmployeeSchema.find({remark : category})
        res.json({ "result" : result })
    } catch (error) {
        res.status(500).json({"msg": error.message})
    }
}

const insertEmp = async(req,res) =>{
    try {
        const {Firstname,lastname,gender,DOB,NIC,Address,Contactnumber,Email,Qulification,remark,password }= req.body
        const newEmployee = await EmployeeSchema.create({Firstname,lastname,gender,DOB,NIC,Address,Contactnumber,Email,Qulification,remark,password})
        res.status(202).json({"msg" : "inserted successfully !!!",  "newEmployee" : newEmployee})
    } catch (error) {
        res.status(500).json({"msg": error.message})
    }

}
const updateEmp =async(req,res)=>{
    try {
        const {EmpId}=req.params
        console.log(EmpId);
        const {newFirstname,newlastname,newgender,newDOB,newNIC,newAddress,newContactnumber,newEmail,newQulification,newremark,newpassword }= req.body
       console.log(newFirstname);
        const emp = await EmployeeSchema.findById(EmpId)
        console.log(emp);
       emp.Firstname = newFirstname
       emp.lastname = newlastname
       emp.gender = newgender
       emp.DOB = newDOB
       emp.NIC = newNIC
       emp.Address = newAddress
       emp.Contactnumber = newContactnumber
       emp.Email = newEmail
       emp.Qulification = newQulification
       emp.remark = newremark
       emp.password = newpassword
       await emp.save()
       res.status(200).json({ "employee" : emp })

    } catch (error) {
        res.status(500).json({"msg":error.message})
    }


}

const getEmp = async(req,res) =>{
    try {
        const resultSet = await EmployeeSchema.find({})
        res.status(200).json({"result":resultSet})
    } catch (error) {
        res.status(500).json({"msg":error.message})
        
        
    }
}
const deleteEmp = async(req,res)=>{
    try {
        const{EmpId}=req.params
        const emp =await EmployeeSchema.findOneAndDelete({_id : EmpId})
        res.status(200).json({"msg" : "Employee Deleted,", "emp" : emp})

        
    } catch (error) {
        res.status(500).json({"msg" : error.message})
        
    }

}

module.exports = {insertEmp,updateEmp,getEmp,deleteEmp, getSpecificCategory}