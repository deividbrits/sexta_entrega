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
    const {id} = req.body;
    const cafe = await Cafe.findById(id)
    res.json(cafe)
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
    const {id} = req.body 
    try {
        const borrarCafe = await Cafe.findByIdAndDelete (id)
        res.json(borrarCafe)
    } catch(error) {
        res.status(500).json({
            msj: 'error al borrar cafe',
            error
        })    
    }
} 