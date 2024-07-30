const mongoose = require('mongoose')
const CafeSchema = mongoose.Schema({
        nombre: {
            type: String, 
            required: true
            },
         origen: {
            type: String,
            required: true
         },
         grano:{
            type: String,
            required: true
         },
         molienda:{
            type: String,
            required: true
         },

        precio: {
            type: Number
        },
    },
    {
        timestamps: true
    }
)
const Cafe = mongoose.model('Cafe', CafeSchema)

module.exports = Cafe;