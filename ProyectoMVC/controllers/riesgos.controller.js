const model = require('./../models/riesgos_model.js');

module.exports.post_registro = async(req,res) =>{
    try {
        const name = req.body.nombreRiesgo;
        const desc = req.body.descripcionRiesgo;
        const level = req.body.nivelRiesgo;
        const ID = req.body.IDRiesgo;
    
        const risk = new model.Riesgo(name, desc, level, ID);
        const savedRisk = await risk.save();
    
        res.status(201).redirect("/appix/registro");

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No jala" });
    }
}

module.exports.get_proyectos = async(req, res) => {
    try {
        const proyect = new model.Proyecto();
        const proyectos = await proyect.get();
        return res.status(200).json({ proyectos:proyectos });
    } catch(error) {
        console.error('Error:', error);
    }
};