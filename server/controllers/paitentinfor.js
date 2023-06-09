const paitentinforSchema = require("../models/paitentinfor")
const mongoose = require("mongoose")

const insertpaitentinfor = async(req, res) => {
    try {
        console.log("ökkk");
        const { wardNumber, wardName, paitentName, headDocName} = req.body
        const newpaitentinfor = await paitentinforSchema.create({ wardNumber, wardName, paitentName, headDocName })
        res.status(202).json({ "newpaitentinfor" : newpaitentinfor })

    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

const updatepaitentinfor = async(req, res) => {
    try {
        const { wardID } = req.params
        // const { newwardNumber, newwardName, newpaitentName, newheadDocName } = req.body;
        const { wardNumber, wardName, paitentName, headDocName } = req.body;
        const paitentinfor = await paitentinforSchema.findById(wardID)
        // paitentinfor.wardNumber = newwardNumber
        // paitentinfor.wardName = newwardName
        // paitentinfor.paitentName = newpaitentName
        // paitentinfor.headDocName = newheadDocName
        paitentinfor.wardNumber = wardNumber
        paitentinfor.wardName = wardName
        paitentinfor.paitentName = paitentName
        paitentinfor.headDocName = headDocName
        await paitentinfor.save()

        res.status(202).json({ "message" : "paitent informatioin Updated!" ,"updated paitentinfor" : paitentinfor})
        
        // res.status(202).json({ "message" : "paitent informatioin Updated!"})
        
    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

const deletepaitentinfor = async(req, res) => {
    try {
        const wardID = req.params._id
        const paitentinfor = await paitentinforSchema.findOneAndDelete({wardID})
        res.status(200).json({ "msg" : "paitent information deleted" , "paitentinfor" : paitentinfor}) 
    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

const getpaitentinfor = async(req, res) => {
    try {
        const resultSet = await paitentinforSchema.find({})
        res.status(200).json({ "result" : resultSet })
    } catch (error) {
        res.status(500).json({ "msg" : error.message})
    }
}

module.exports = { insertpaitentinfor, updatepaitentinfor, deletepaitentinfor, getpaitentinfor }