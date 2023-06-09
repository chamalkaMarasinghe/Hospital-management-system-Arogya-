const PhysicalAsset = require('../models/physicalAsset')
const DamagedPhysicalAsset = require('../models/damagedPhysicalAsset')
const fs = require('fs')

const generateReport = async(req, res) => {
    try {
        const result = await PhysicalAsset.find({})
        
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
                            <th>Ward Number</th>
                        </tr>
                        ${ 
                            result.map((obj, index) => {
                                return(
                                    `<tr key={${index}>
                                        <td data-th="category">${obj.category}</td>
                                        <td data-th="itemNumber">${obj.itemNumber}</td>
                                        <td data-th="wardNumber">${obj.wardNumber}</td>
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

const generateDamagedReport = async(req, res) => {
    try {
        const result = await DamagedPhysicalAsset.find({})
        
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
                            <th>Ward Number</th>
                        </tr>
                        ${ 
                            result.map((obj, index) => {
                                return(
                                    `<tr key={${index}>
                                        <td data-th="category">${obj.category}</td>
                                        <td data-th="itemNumber">${obj.itemNumber}</td>
                                        <td data-th="wardNumber">${obj.wardNumber}</td>
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

const getAllPhysicalAsset = async(req, res) => {
    try {
        const result = await PhysicalAsset.find({})
        res.status(200).json({"result" : result})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const insertPhysicalAsset = async(req, res) => {
    try {
        const { category, itemNumber, wardNumber } = req.body
        const newAsset = await PhysicalAsset.create({category, itemNumber, wardNumber})
        res.status(200).json({ "msg" : "successfully inserted the asset", "asset" : newAsset })
        
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const getOneAsset = async(req, res) => {
    try {
        const { assetId } = req.params
        const asset = await PhysicalAsset.findOne({_id : assetId})
        res.status(200).json(asset)
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const updatePhysicalAsset = async(req, res) => {
    try {
        const { assetId } = req.params
        const { newCategory, newItemNumber, newWardNumber } = req.body
        const physicalAsset = await PhysicalAsset.findOne({_id : assetId})

        if(physicalAsset != null){
            physicalAsset.category = newCategory
            physicalAsset.itemNumber = newItemNumber
            physicalAsset.wardNumber = newWardNumber
            await physicalAsset.save()
            res.status(200).json({ "msg" : "successfully updated the asset", "asset" : physicalAsset })
        }
        else
            res.status(404).json({ "msg" : "Asset not found" })

    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const deletePhysicalAsset = async(req, res) => {
    try {
        const { assetId } = req.params
        const assetToBeDeleted = await PhysicalAsset.findOneAndDelete({_id : assetId})
        if(assetToBeDeleted){
            res.status(202).json({ "msg" : "successfully deleted the asset", "asset" : assetToBeDeleted })
        }
        else{
            res.status(404).json({ "msg" : "asset not found", "asset" : assetToBeDeleted })
        }
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
} 

const insertDamagedPhysicalAsset = async(req, res) => {
    try {
        const { assetId } = req.params
        const assetGetDamaged = await PhysicalAsset.findOneAndDelete({_id : assetId})

        var newDamagedAsset
        if(assetGetDamaged != null){
            newDamagedAsset = await DamagedPhysicalAsset.create({ category : assetGetDamaged.category, itemNumber : assetGetDamaged.itemNumber, wardNumber : assetGetDamaged.wardNumber})
        }
        res.status(200).json({ "msg" : "successfully inserted to the damaged list", "asset" : newDamagedAsset })
        
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const getAllDamagedPhysicalAsset = async(req, res) => {
    try {
        const result = await DamagedPhysicalAsset.find({})
        res.status(200).json({"result" : result})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const deleteDamagedPhysicalAsset = async(req, res) => {
    try {
        const { assetId } = req.params
        const assetToBeDeleted = await DamagedPhysicalAsset.findOneAndDelete({_id : assetId})
        if(assetToBeDeleted){
            res.status(202).json({ "msg" : "successfully deleted the damaged asset", "asset" : assetToBeDeleted })
        }
        else{
            res.status(404).json({ "msg" : "asset not found", "asset" : assetToBeDeleted })
        }
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
} 

const restoreDamagedPhysicalAsset = async(req, res) => {
    try {
        const { assetId } = req.params
        const assetToBeRestored = await DamagedPhysicalAsset.findOneAndDelete({_id : assetId})

        var newRestoredAsset
        if(assetToBeRestored != null){
            newRestoredAsset = await PhysicalAsset.create({ category : assetToBeRestored.category, itemNumber : assetToBeRestored.itemNumber, wardNumber : assetToBeRestored.wardNumber})
        }
        res.status(200).json({ "msg" : "successfully restored the damaged asset", "asset" : newRestoredAsset })
        
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const physicalAssetLiveSearch = async(req, res) => {
    try {
        const { searchString } = req.params
        if(searchString !== '!!!'){
            const result = await PhysicalAsset.find({ $or : [ {category :{$regex : searchString}}, {itemNumber :{$regex : searchString}}, {wardNumber :{$regex : searchString}}]})
            res.status(200).send(result)
        }
        else{
            const result = await PhysicalAsset.find({})
            res.status(200).send(result)
        }  
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const damagedPhysicalAssetLiveSearch = async(req, res) => {
    try {
        const { searchString } = req.params
        if(searchString !== '!!!'){
            const result = await DamagedPhysicalAsset.find({ $or : [ {category :{$regex : searchString}}, {itemNumber :{$regex : searchString}}, {wardNumber :{$regex : searchString}}]})
            res.status(200).send(result)
        }
        else{
            const result = await DamagedPhysicalAsset.find({})
            res.status(200).send(result)
        }  
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}


module.exports = { getAllPhysicalAsset, insertPhysicalAsset, getOneAsset, updatePhysicalAsset, deletePhysicalAsset, insertDamagedPhysicalAsset, getAllDamagedPhysicalAsset, deleteDamagedPhysicalAsset, restoreDamagedPhysicalAsset, physicalAssetLiveSearch, damagedPhysicalAssetLiveSearch, generateReport, generateDamagedReport}