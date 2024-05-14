
module.exports.sign_in = async(req, res) =>{
    res.render('./sign_in/sign_in_html')
}

module.exports.inicio = async(req, res) =>{
    res.render('./inicio/inicio_html')
}

module.exports.perfil = async(req, res) =>{
    res.render('./perfil/perfil_html')
}

module.exports.proyectos = async(req, res) =>{
    res.render('./proyectos/proyectos_html')
}

module.exports.riesgos = async(req, res) =>{
    res.render('./riesgos/riesgos_html')
}

module.exports.ayuda = async(req, res) =>{
    res.render('./ayuda/ayuda_html')
}
