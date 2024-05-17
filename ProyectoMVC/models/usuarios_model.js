const db = require('./../utils/database.js');

exports.Usuario = class {
    // contructor de la clase usuario
    constructor(my_id, my_name, my_pass, my_mail, my_priv){
        this.id = my_id;
        this.name = my_name;
        this.pass = my_pass;
        this.mail = my_mail;
        this.priv = my_priv;
    }

    // metodos de la  clase usuario
    async save() {
        try {
            const connection = await db();
            const result = await connection.execute(
            `INSERT INTO usuario (UserID, NomUsuario, ContraUsuario, MailUsuario, PrivUsuario) VALUES (?, ?, ?, ?, ?)`,
            [this.id, this.name, this.pass, this.mail, this.priv]
            );
            await connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async find(nombre) {
        try {
            const connection = await db();
            const result = await connection.execute('Select * from usuario WHERE NomUsuario = ?', [nombre]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; 
        }
    }
}

const get = async() => {
    try {
        const connection = await db();
        const [rows] = await connection.query('SELECT * FROM usuario');
        const usuarios = rows.map(row => ({
            id: row.UserID,
            nombre: row.NomUsuario,
            contra: row.ContraUsuario,
            correo: row.MailUsuario,
            priv: row.PrivUsuario
        }));
        return usuarios;
    } catch (error) {
        throw error;
    }
}

module.exports = {get};