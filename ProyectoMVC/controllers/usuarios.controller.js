
const model = require('./../models/usuarios_model.js');

module.exports.get_registro = async(req, res) =>{
    res.render("./usuarios/registro/registro");
}

module.exports.post_registro = async(req,res) =>{
    try {
        const name = req.body.nombre;
        const pass = req.body.pass;
        const mail = req.body.mail;
        const priv = req.body.priv;
    
        const user = new model.Usuario(name, pass, mail, priv);
        const savedUser = await user.save();

        res.status(201).redirect("/usuarios/registro");
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No jala" });
    }
}

module.exports.get_usuarios = async(req, res) => {
    try {
        const user = new model.Usuario();
        const usuarios = await user.get();
        return res.status(200).json({ usuarios:usuarios });
    } catch(error) {
        console.error('Error:', error);
    }
};

module.exports.delete = async(req, res) => {
    try {
        const userID = req.body.id;
        const user = new model.Usuario();
        await user.delete(userID);
        res.status(201).redirect("/usuarios/registro");
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "No jala el delete" });
    }
};

module.exports.find = async(req, res) => {
    try {
        const nombre = req.body.nombre;
        const user = new model.Usuario();
        const usuarios = await user.find(nombre);
        if (usuarios.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.status(200).json({ usuarios:usuarios });
        res.render("./sign_in/sign_in_html");
    } catch(error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};



module.exports.get_login = async(req,res) =>{
    res.render("./sign_in/sign_in_html");
}

module.exports.post_login = async(req,res) =>{
    try {
        const Umodel = new model.Usuario()
        const usuario = await Umodel.find(req.body.username)

        if(usuario.length < 1){
            res.render("./sign_in/sign_in_html");
            return;
        }

        const usupas = usuario.ContraUsuario;
        const paspas = req.body.password;
        var doMatch = true;

                    

        if(usupas === paspas){doMatch = true;}
        else {doMatch = false;}
//
        if(!doMatch) {
            res.redirect('/appix/inicio');
            return;
        } 

    }catch (error){
        console.error(error);
        res.status(500).json({ message: "No jala" });
        res.render("./sign_in/sign_in_html");
    }        
}
