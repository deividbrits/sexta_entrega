const  Cafe  = require ('../models/productModel');
const mongoose = require('mongoose');


exports.addCafe = async (req, res) => {
    const {nombre , origen ,grano , molienda , precio} = req.body;
    try { const newCafe = await Cafe.create({
        nombre,
        origen,
        grano,
        molienda,
        precio
    });
    res.json(newCafe)
    } catch (error) {
        res.status(500).json({
            msj:"Hubo un error en la solicitud",
            error
        }) 
        console.log(error)
    }  

};

exports.getAllCafe = async (req,res) => {
   try{
    const cafe = await Cafe.find({})
    res.json({cafe})
   } catch (error) {
    res.status(500).json ({
        msj: 'error al obtener cafes',
        error
    })
}
} 

exports.getCafeById = async (req,res) => {
 try {
    const cafeID =req.params.id;
    console.log(cafeID)
    const cafe = await Cafe.findById(cafeID)
    if (cafe) {
    res.json(cafe)
    console.log(cafe)
}else {
    res.status(404).json ({msj: 'cafe no encontrado'})
}
} catch(error) {
    res.status(500).json({
        msj: 'error al obtener cafe',
        error
    })
}    

};

exports.updateCafeById = async (req,res) => {
    const {id,nombre , origen , grano, molienda,precio} = req.body;
    try {
        const actualizarCafe = await Cafe.findByIdAndUpdate (id,{nombre,origen,grano,molienda,precio})
        res.json(actualizarCafe)
    } catch(error) {
        res.status(500).json({
            msj: 'error al actualizar cafe',
            error
        })    
    }

};

exports.deleteCafeById = async (req,res) => {
     try {
        const cafeID = req.params.id;
        const borrarCafe = await Cafe.findByIdAndDelete (cafeID)
        if(borrarCafe) {
        res.json(borrarCafe)
    }else {
        res.status(404).json ({msj: 'cafe no encontrado'})
    }
    } catch(error) {
        res.status(500).json({
            msj: 'error al borrar cafe',
            error
        })    
    }
} 