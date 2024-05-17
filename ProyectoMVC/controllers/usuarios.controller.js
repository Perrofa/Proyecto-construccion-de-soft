
const model = require('./../models/usuarios_model.js');

module.exports.get_registro = async(req, res) =>{
    res.render("./registro");
}

module.exports.post_registro = async(req,res) =>{
    try {
        const id = req.body.id;
        const name = req.body.nombre;
        const pass = req.body.pass;
        const mail = req.body.mail;
        const priv = req.body.priv;
    
        const user = new model.Usuario(id, name, pass, mail, priv);
        const savedUser = await user.save();

        res.status(201).redirect("/appix/inicio");
    
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