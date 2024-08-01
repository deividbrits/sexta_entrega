const Usuario = require('../models/userModel');
const mongoose = require('mongoose');
const auth = require('../middleware/authorizacion')

exports.userRegister = async (req, res) => {
	const { username, email, password,privileges } = req.body    
	try {
		const salt = await bcryptjs.genSalt(10)
		const hashedPassword = await bcryptjs.hash(password, salt)
		const respuestaDB = await Usuario.create({
			username, 
			email, 
			password: hashedPassword,
            privileges
        })
		// usuario creado
		return res.json(respuestaDB)
	} catch (error) {
		return res.status(400).json({
			msg: error
		})
	}
}


exports.userLogin = async(req, res) => {

    const {email, password} = req.body
    try {

        let foundUser = await Usuario.findOne({email})
        if(!foundUser){
            return res.status(400).json({msg: "Username no existe"})
        }
        const passCorrecto = await bcryptjs.compare(password, foundUser.password)
        if(!passCorrecto){
            return await res.status(400).
	            json({msg: "The username or password no corresponde"})
        }
        const payload = { user: { id: foundUser.id } }
        jwt.sign(
            payload, 
            process.env.SECRET,
            {
                expiresIn: 3600000 
            }, 
            (error, token) => {
                if(error) throw error;
            
                res.json({token})
	    })
    } catch (error) {
        res.json({
            msg: "we have an error",
            error
        })
    }
}

exports.userUpdate = async (req, res) => {
   const {id,username , password, email } = req.body
   try {
    const actualizarUsuario = await Usuario.findByIdAndUpdate (id,{username,password,email})
    res.json(actualizarUsuario)
    } catch(error) {
        res.status(500).json({
            msj: 'error al actualizar usuario',
            error
        })    
    }
}


exports.verifyUser = auth, async (req, res) => {
    try {
	
		const usuario = await Usuario.findById(req.user.id).select('-password')
		res.json({ usuario })
	} catch (error) {
		res.status(500).json({
			msg: "we have an error",
			error
		})
	}
   
}
