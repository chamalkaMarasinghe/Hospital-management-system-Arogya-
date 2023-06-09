const mongoose = require('mongoose')

const DamagedLaboratoryEquipmentsSchema = new mongoose.Schema(
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

module.exports = mongoose.model('DamagedLaboratoryEquipments', DamagedLaboratoryEquipmentsSchema)