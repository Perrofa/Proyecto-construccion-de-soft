
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



/* module.exports.do_Login = async(req,res) => {
    try {
        const usuario = new model.Usuario();
        const users = await model.Usuario.find(req.body.nombre);
        const user = users[0];
        const do_Match = (req.body.pass === user.pass);

        //if (!do_Match) {
        //    return; 
        //}

        //req.session.username = user.username;
        //req.session.isLoggedIn = true;
        res.render("sign_in/sign_in_html");
        
    
    }catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'No Jala' });
    }

} */

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