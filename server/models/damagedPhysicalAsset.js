const mongoose = require('mongoose')

const DamagedPhysicalAssetSchema = new mongoose.Schema(
    {
        category : {
            type : String,
            required : true, 
        },

        itemNumber : {
            type : String,
            required : true, 
        },

        wardNumber : {
            type : String,
            required : true, 
        },
    }

)

module.exports = mongoose.model('damagedPhysicalAsset', DamagedPhysicalAssetSchema)