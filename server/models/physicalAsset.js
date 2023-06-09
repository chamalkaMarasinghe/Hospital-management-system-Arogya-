const mongoose = require('mongoose')

const PhysicalAssetSchema = new mongoose.Schema({

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

})

module.exports = mongoose.model('PhysicalAsset', PhysicalAssetSchema)