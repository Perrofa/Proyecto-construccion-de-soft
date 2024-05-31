
module.exports.sign_in = async(req, res) =>{
    res.render('./sign_in/sign_in_html')
}
module.exports.inicio = async(req, res) =>{
    res.render('./appix/inicio_html')
}
module.exports.perfil = async(req, res) =>{
    res.render('./appix/perfil_html')
}
module.exports.proyectos = async(req, res) =>{
    res.render('./appix/proyectos_html')
}
module.exports.registro = async(req, res) =>{
    res.render('./appix/registro_html')
}
module.exports.ayuda = async(req, res) =>{
    res.render('./appix/ayuda_html')
}
