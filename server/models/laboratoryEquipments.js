const mongoose = require('mongoose')

const LaboratoryEquipmentsSchema = new mongoose.Schema(
    {
        category : {
            type : String,
            required : true,
        }, 

        itemNumber : {
            type : String,
            required : true, 
        },

        venue : {
            type : String,
            required : true,
        }
    }
)

module.exports = mongoose.model('LaboratoryEquipments', LaboratoryEquipmentsSchema)