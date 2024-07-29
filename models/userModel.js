const mongoose = require('mongoose')
const UsuarioSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Usuario = mongoose.model("Usuario", UsuarioSchema)

module.exports = Usuario