const LaboratoryEquipments = require('../models/laboratoryEquipments')
const damagedLaboratoryEquipments = require('../models/damagedLaboratoryEquipments')
const fs = require('fs')

const generateEquipmnetReport = async(req, res) => {
    try {
        const result = await LaboratoryEquipments.find({})
        
        const htmlContent = `
        <!DOCTYPE html>
            <html>
                <head>
                    <title>My HTML File</title>
                    <style>
                        #customers {
                        font-family: Arial, Helvetica, sans-serif;
                        border-collapse: collapse;
                        width: 100%;
                        }

                        #customers td, #customers th {
                        border: 1px solid #ddd;
                        padding: 8px;
                        }

                        #customers tr:nth-child(even){background-color: #f2f2f2;}

                        #customers tr:hover {background-color: #ddd;}

                        #customers th {
                        padding-top: 12px;
                        padding-bottom: 12px;
                        text-align: left;
                        background-color: #04AA6D;
                        color: white;
                        }
                    </style>
                </head>
                <body>
                    <table id="customers">
                        <tr>
                            <th>Category</th>
                            <th>Item Number</th>
                            <th>Venue</th>
                        </tr>
                        ${ 
                            result.map((obj, index) => {
                                return(
                                    `<tr key={${index}>
                                        <td data-th="category">${obj.category}</td>
                                        <td data-th="itemNumber">${obj.itemNumber}</td>
                                        <td data-th="wardNumber">${obj.venue}</td>
                                    </tr>`
                                )
                            })
                        }
                    </table>
                </body>
            </html>
        `;

        fs.writeFile('./public/sample.html', htmlContent, (err) => {
            if (err) throw err;
            console.log('File saved successfully');
        });

        res.status(200).json({ "msg" : "Done"})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const generateDamagedEquipmnetReport = async(req, res) => {
    try {
        const result = await damagedLaboratoryEquipments.find({})
        
        const htmlContent = `
        <!DOCTYPE html>
            <html>
                <head>
                    <title>My HTML File</title>
                    <style>
                        #customers {
                        font-family: Arial, Helvetica, sans-serif;
                        border-collapse: collapse;
                        width: 100%;
                        }

                        #customers td, #customers th {
                        border: 1px solid #ddd;
                        padding: 8px;
                        }

                        #customers tr:nth-child(even){background-color: #f2f2f2;}

                        #customers tr:hover {background-color: #ddd;}

                        #customers th {
                        padding-top: 12px;
                        padding-bottom: 12px;
                        text-align: left;
                        background-color: #04AA6D;
                        color: white;
                        }
                    </style>
                </head>
                <body>
                    <table id="customers">
                        <tr>
                            <th>Category</th>
                            <th>Item Number</th>
                            <th>Venue</th>
                        </tr>
                        ${ 
                            result.map((obj, index) => {
                                return(
                                    `<tr key={${index}>
                                        <td data-th="category">${obj.category}</td>
                                        <td data-th="itemNumber">${obj.itemNumber}</td>
                                        <td data-th="wardNumber">${obj.venue}</td>
                                    </tr>`
                                )
                            })
                        }
                    </table>
                </body>
            </html>
        `;

        fs.writeFile('./public/sample.html', htmlContent, (err) => {
            if (err) throw err;
            console.log('File saved successfully');
        });

        res.status(200).json({ "msg" : "Done"})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const getAllLaboratoryEquipments = async(req, res) => {
    try {
        const resultSet = await LaboratoryEquipments.find({})
        res.status(200).json({ "result" : resultSet})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const getAllDamagedLaboratoryEquipments = async(req, res) => {
    try {
        const resultSet = await damagedLaboratoryEquipments.find({})
        res.status(200).json({ "result" : resultSet})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const getOneEquipmnet = async(req, res) => {
    try {
        const { equipmenId } = req.params
        const asset = await LaboratoryEquipments.findOne({_id : equipmenId})
        res.status(200).json(asset)
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const insertLaboratoryEquipments = async(req, res) => {
    try {
        const { category, itemNumber, venue } = req.body
        const newLaboratoryEquipment = await LaboratoryEquipments.create({category, itemNumber, venue})
        res.status(200).json({ "msg" : "successfully inserted the equipment", "equipment" : newLaboratoryEquipment })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const insertDamagedLaboratoryEquipments = async(req, res) => {
    try {
        const { equipmentId } = req.params
        const equipmentGetDamaged = await LaboratoryEquipments.findOneAndDelete({_id : equipmentId})
        var newDamagedEquipment
        if(equipmentGetDamaged){
            newDamagedEquipment = await damagedLaboratoryEquipments.create({category : equipmentGetDamaged.category, itemNumber : equipmentGetDamaged.itemNumber, venue : equipmentGetDamaged.venue})
        }
        res.status(200).json({ "msg" : "successfully inserted the damaged equipment", "equipment" : newDamagedEquipment })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const updateLaboratoryEquipments = async(req, res) => {
    try {
        const { equipmentId } = req.params
        const { newCategory, newItemNumber, newVenue } = req.body
        const equipment = await LaboratoryEquipments.findOne({_id : equipmentId})
        equipment.category = newCategory
        equipment.itemNumber = newItemNumber
        equipment.venue = newVenue
        await equipment.save()
        res.status(200).json({ "msg" : "successfully updated the equipment", "equipment" : equipment })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const restoreDamagedLaboratoryEquipments = async(req, res) => {
    try {
        const { equipmentId } = req.params
        const equipmenToBeRestored = await damagedLaboratoryEquipments.findOneAndDelete({_id : equipmentId})
        var restoredEquipment
        if(equipmenToBeRestored){
            restoredEquipment = await LaboratoryEquipments.create({category : equipmenToBeRestored.category, itemNumber : equipmenToBeRestored.itemNumber, venue : equipmenToBeRestored.venue})
        }
        res.status(200).json({ "msg" : "successfully restored the equipment", "equipment" : restoredEquipment })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const deleteLaboratoryEquipment = async(req, res) => {
    try {
        const { equipmentId } = req.params
        const equipmetToBeDeleted = await LaboratoryEquipments.findOneAndDelete({_id : equipmentId})
        if(equipmetToBeDeleted){
            res.status(200).json({ "msg" : "successfully deleted the equipment", "equipment" : equipmetToBeDeleted })
        }
        else{
            res.status(404).json({ "msg" : "equipment not found"})
        }
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const deleteDamagedLaboratoryEquipment = async(req, res) => {
    try {
        const { equipmentId } = req.params
        const equipmetToBeDeleted = await damagedLaboratoryEquipments.findOneAndDelete({_id : equipmentId})
        if(equipmetToBeDeleted){
            res.status(200).json({ "msg" : "successfully deleted the equipment", "equipment" : equipmetToBeDeleted})
        }
        else{
            res.status(404).json({ "msg" : "equipment not found"})
        }
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const equipmentsLiveSearch = async(req, res) => {
    try {
        const { searchString } = req.params
        if(searchString !== '!!!'){
            const result = await LaboratoryEquipments.find({ $or : [ {category :{$regex : searchString}}, {itemNumber :{$regex : searchString}}, {venue :{$regex : searchString}}]})
            res.status(200).send(result)
        }
        else{
            const result = await LaboratoryEquipments.find({})
            res.status(200).send(result)
        }  
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const damagedEquipmentsLiveSearch = async(req, res) => {
    try {
        const { searchString } = req.params
        if(searchString !== '!!!'){
            const result = await damagedLaboratoryEquipments.find({ $or : [ {category :{$regex : searchString}}, {itemNumber :{$regex : searchString}}, {venue :{$regex : searchString}}]})
            res.status(200).send(result)
        }
        else{
            const result = await damagedLaboratoryEquipments.find({})
            res.status(200).send(result)
        }  
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}


module.exports = {
    getAllLaboratoryEquipments,
    getAllDamagedLaboratoryEquipments,
    getOneEquipmnet,
    insertLaboratoryEquipments,
    insertDamagedLaboratoryEquipments,
    restoreDamagedLaboratoryEquipments,
    updateLaboratoryEquipments,
    deleteLaboratoryEquipment,
    deleteDamagedLaboratoryEquipment,
    equipmentsLiveSearch,
    damagedEquipmentsLiveSearch,
    generateEquipmnetReport,
    generateDamagedEquipmnetReport
}