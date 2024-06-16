const db = require('./../utils/database.js');

exports.Usuario = class {
    // contructor de la clase usuario
    constructor(my_name, my_pass, my_mail, my_priv){
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
            `CALL NewUsuario(?, ?, ?, ?)`,
            [this.name, this.pass, this.mail, this.priv]
            );
            await connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async find(nombre) {
        try {
            const connection = await db();
            const result = await connection.execute('SELECT * FROM usuario WHERE NomUsuario = ?', [nombre]);
            await connection.release();
            return result;
        } catch (error) {
            console.error(error);
            throw error; 
        }
    }

    async get() {
        try {
            const connection = await db();
            const usuarios = await connection.execute('SELECT * FROM usuario');
            await connection.release();
            console.log(usuarios);
            return usuarios;
        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const connection = await db();
            await connection.execute('DELETE FROM usuario WHERE UserID = ?', [id]);
            await connection.release();
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

}
