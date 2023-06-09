const WardSchema = require("../models/ward")
const mongoose = require("mongoose")

const insertWard = async(req, res) => {
    try {
        const { wardName, wardNumber, wardCapacity, headDocName, numberOfEmp } = req.body
        const newWard = await WardSchema.create({ wardName, wardNumber, wardCapacity, headDocName, numberOfEmp })
        res.status(202).json({ "newWard" : newWard })

    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

const updateWard = async(req, res) => {
    try {
        const { wardID } = req.params
        const { newwardName, newwardNumber, newwardCapacity, newheadDocName, newnumberOfEmp } = req.body
        const ward = await WardSchema.findById(wardID)
        ward.wardName = newwardName
        ward.wardNumber = newwardNumber
        ward.wardCapacity = newwardCapacity
        ward.headDocName = newheadDocName
        ward.numberOfEmp = newnumberOfEmp
        await ward.save()

        res.status(202).json({ "message" : "ward Updated!" ,"updated ward" : ward})
        
    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

const deleteWard = async(req, res) => {
    try {
        const wardID = req.params._id
        const ward = await WardSchema.findOneAndDelete({wardID})
        res.status(200).json({ "msg" : "Ward deleted" , "ward" : ward}) 
    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

const getWards = async(req, res) => {
    try {
        const resultSet = await WardSchema.find({})
        res.status(200).json({ "result" : resultSet })
    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

module.exports = { insertWard, updateWard, deleteWard, getWards }