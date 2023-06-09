const medicine = require('../models/medicine')
const expiredMedicine = require('../models/expiredMedicine')
const fs = require('fs')

const generateMedicineReport = async(req, res) => {
    try {
        const result = await medicine.find({})
        
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
                            <th>Name</th>
                            <th>Company</th>
                            <th>Description</th>
                            <th>Dosage</th>
                            <th>Quantity</th>
                            <th>Man.Date</th>
                            <th>Exp.Date</th>
                        </tr>
                        ${ 
                            result.map((obj, index) => {
                                return(
                                    `<tr key={${index}>
                                        <td data-th="category">${obj.mediName}</td>
                                        <td data-th="itemNumber">${obj.company}</td>
                                        <td data-th="wardNumber">${obj.description}</td>
                                        <td data-th="wardNumber">${obj.dosage}</td>
                                        <td data-th="wardNumber">${obj.quantity}</td>
                                        <td data-th="wardNumber">${obj.manufactureDate}</td>
                                        <td data-th="wardNumber">${obj.expireDate}</td>
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

const generateExpiredMedicineReport = async(req, res) => {
    try {
        const result = await expiredMedicine.find({})
        
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
                            <th>Name</th>
                            <th>Company</th>
                            <th>Description</th>
                            <th>Dosage</th>
                            <th>Quantity</th>
                            <th>Man.Date</th>
                            <th>Exp.Date</th>
                        </tr>
                        ${ 
                            result.map((obj, index) => {
                                return(
                                    `<tr key={${index}>
                                        <td data-th="category">${obj.mediName}</td>
                                        <td data-th="itemNumber">${obj.company}</td>
                                        <td data-th="wardNumber">${obj.description}</td>
                                        <td data-th="wardNumber">${obj.dosage}</td>
                                        <td data-th="wardNumber">${obj.quantity}</td>
                                        <td data-th="wardNumber">${obj.manufactureDate}</td>
                                        <td data-th="wardNumber">${obj.expireDate}</td>
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

const getAllMedicine = async(req, res) => {
    try {
        const resultSet = await medicine.find({})
        res.status(200).json({ "result" : resultSet})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const getAllExpiredMedicine = async(req, res) => {
    try {
        const resultSet = await expiredMedicine.find({})
        res.status(200).json({ "result" : resultSet})
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const getOneMedicine = async(req, res) => {
    try {
        const { medicineId } = req.params
        const obj = await medicine.findOne({_id : medicineId})
        res.status(200).json(obj)
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const insertMedicine = async(req, res) => {
    try {
        const {mediName, company, description, dosage, quantity, manufactureDate, expireDate, picPath} = req.body
        const newMedicine = await medicine.create({mediName, company, description, dosage, quantity, manufactureDate, expireDate, picPath})
        res.status(200).json({ "msg" : "successfully inserted medicine", "medicine" : newMedicine })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const insertExpiredMedicine = async(req, res) => {
    try {
        const { medicineId } = req.params
        const medicineGotExpired = await medicine.findOneAndDelete({_id : medicineId})
        const newExpiredMedicine = await expiredMedicine.create({
            mediName : medicineGotExpired.mediName,
            company : medicineGotExpired.company,
            description : medicineGotExpired.description,
            dosage : medicineGotExpired.dosage,
            quantity : medicineGotExpired.quantity,
            manufactureDate : medicineGotExpired.manufactureDate,
            expireDate : medicineGotExpired.expireDate,
            picPath : medicineGotExpired.picPath
        })
        res.status(200).json({ "msg" : "successfully removed the exired medicine", "medicine" : newExpiredMedicine })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const updateMedicine = async(req, res) => {
    try {
        const { medicineId } = req.params
        const {newmediName, newcompany, newdescription, newdosage, newquantity, newmanufactureDate, newexpireDate, newpicPath} = req.body
        const medicineToBeUpdated = await medicine.findOne({_id : medicineId})
        
        medicineToBeUpdated.mediName = newmediName
        medicineToBeUpdated.company = newcompany
        medicineToBeUpdated.description = newdescription
        medicineToBeUpdated.dosage = newdosage
        medicineToBeUpdated.quantity = newquantity
        medicineToBeUpdated.manufactureDate = newmanufactureDate
        medicineToBeUpdated.expireDate = newexpireDate
        medicineToBeUpdated.picPath = newpicPath
        await medicineToBeUpdated.save()

        res.status(200).json({ "msg" : "successfully updated the medicine", "medicine" : medicineToBeUpdated })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const deleteMedicine = async(req, res) => {
    try {
        const { medicineId } = req.params
        const medicineToBeRemoved = await medicine.findOneAndDelete({_id : medicineId})
        res.status(200).json({ "msg" : "successfully deleted the medicine", "medicine" : medicineToBeRemoved })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const deleteExpiredMedicine = async(req, res) => {
    try {
        const { medicineId } = req.params
        const medicineToBeRemoved = await expiredMedicine.findOneAndDelete({_id : medicineId})
        res.status(200).json({ "msg" : "successfully deleted the expired medicine", "medicine" : medicineToBeRemoved })
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const medicineLiveSearch = async(req, res) => {
    try {
        const { searchString } = req.params
        
        if(searchString !== '!!!'){
            const result = await medicine.find({ $or : [ {mediName :{$regex : searchString}}]})
            //{dosage :{$regex : searchString}, $expr: {$eq: [{ $type: '$dosage' }, 'string']}}
            //Medicine.find({ dosage: { $regex: regex } }
            res.status(200).send(result)
        }
        else{
            const result = await medicine.find({})
            res.status(200).send(result)
        }  
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

const expiredMedicineLiveSearch = async(req, res) => {
    try {
        const { searchString } = req.params
        if(searchString !== '!!!'){
            const result = await expiredMedicine.find({ $or : [ {mediName :{$regex : searchString}}]})
            res.status(200).send(result)
        }
        else{
            const result = await expiredMedicine.find({})
            res.status(200).send(result)
        }  
    } catch (error) {
        res.status(500).json({"errMsg" : error.message})
    }
}

module.exports = { 
    getAllMedicine,
    getAllExpiredMedicine,
    getOneMedicine,
    insertMedicine,
    insertExpiredMedicine,
    updateMedicine,
    deleteMedicine,
    deleteExpiredMedicine,
    medicineLiveSearch,
    expiredMedicineLiveSearch,
    generateMedicineReport,
    generateExpiredMedicineReport
}
//option i for case insetive
//MyModel.find({ field: { $regex: "", $options: 'i'}, $expr: {$eq: [{ $type: '$field' }, 'string']}});