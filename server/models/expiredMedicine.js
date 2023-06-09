const mongoose = require('mongoose')
const { Schema } = mongoose;
const Double = require('@mongoosejs/double');
mongoose.Schema.Types.Double = Double;

const ExpiredMedicineSchema = new Schema(
    {
        mediName : {
            type : String,
            required : true,
        },

        company : {
            type : String,
            required : true,
        },
        
        description : {
            type : String,
            required : true,
        },
        
        dosage : {
            // type : Schema.Types.Double,
            type : String,
            required : true,
            // min: 0,
            // max: 1e+308
        },

        quantity : {
            type : String,
            required : true,
        },

        manufactureDate : {
            type : String,
            required : true,
        },

        expireDate : {
            type : String,
            required : true,
        },

        picPath : {
            type : String,
            required : true,
        }
    }
)

module.exports = mongoose.model('ExpiredMedicine', ExpiredMedicineSchema) 