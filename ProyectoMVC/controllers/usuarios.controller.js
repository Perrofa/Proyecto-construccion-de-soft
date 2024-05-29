
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
        res.status(500).json({ message: "No jala" }); // Idealmente se crea una plantilla de errores genérica
    }
}

/*
module.exports.get_login = async(req,res) =>{
    res.render("./registro",{registro: false});
}

module.exports.post_login = async(req,res) =>{
    try {
        const usuarios = await model.User.findUser(req.body.username)

        if(usuarios.length < 1){
            res.render("./registro",{
                registro: false
            });
            return;
        }

        const usuario = usuarios[0];
        const doMatch = await bcrypt.compare(req.body.password, usuario.password);

        if(!doMatch) {
            res.render("./registro",{
                registro: false
            });
            return;
        }

        req.session.username = usuario.username;
        req.session.isLoggedIn = true;
        res.render('./logged',{
            user:usuario
        });

    }catch (error){
        res.render("./registro",{
            registro: false
        });
    }        
}
*/

module.exports.get_usuarios = async(req, res) => {
    try {
        const user = new model.Usuario();
        const usuarios = await user.get();
        return res.status(200).json({ usuarios:usuarios });
    } catch(error) {
        console.error('Error:', error);
    }
};

module.exports.get_Nombre = async(req, res) => {
    try {
        const user = new model.Usuario();
        const usuarios = await user.get_NomUsuarios();
        return res.status(200).json({ usuarios:usuarios });
    } catch(error) {
        console.error('Error:', error);
    }
};

module.exports.get_Contra = async(req, res) => {
    try {
        const user = new model.Usuario();
        const usuarios = await user.get_ContraUsuario();
        return res.status(200).json({ usuarios:usuarios });
    } catch(error) {
        console.error('Error:', error);
    }
};

module.exports.find = async(req, res) => {
    try {
        const nombre = 'lalo';
        const user = new model.Usuario();
        const usuarios = await user.find(nombre);
        if (usuarios.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.status(200).json({ usuarios:usuarios });
    } catch(error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};