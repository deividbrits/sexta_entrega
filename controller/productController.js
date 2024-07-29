const { Cafe } = require ("./models/productModel");
const connectDB = require("../config/db");

connectDB ();

exports.addCafe = async (req, res) => {
    const {nombre , origen ,grano , molienda , precio} = req.body;
    try {
    const newCafe = await Cafe.create({
        nombre,
        origen,
        grano,
        molienda,
        precio
    })
    res.json({
        msj:"Cafe creado correctamente",
        data: newCafe
    })
    } catch (error) {
        res.status(500).json({
            msj:"Hubo un error en la solicitud"
        }) 
    }  
   
    
}
