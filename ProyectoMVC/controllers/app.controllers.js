const model = require("../models/app.model.js")

module.exports.index = async(req,res) =>{
    const usuarios = model.ObtenerUsuarios()
    console.log(usuarios.length)
    res.render("./usuarios/obtener_usuarios",{
        usuarios: usuarios
    })
}