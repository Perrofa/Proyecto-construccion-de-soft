const db = require('./../utils/database.js');

exports.Proyecto = class {
    constructor(my_name, my_desc, my_start, my_end){
        this.name = my_name;
        this.desc = my_desc;
        this.start = my_start;
        this.end = my_end;
    }

    async save() {
        try {
            const connection = await db();
            const result = await connection.execute(
            `CALL NewProyecto(?, ?, ?, ?)`,
            [this.name, this.desc, this.start, this.end]
            );
            await connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async get() {
        try {
            const connection = await db();
            const proyectos = await connection.execute('SELECT * FROM proyecto');
            await connection.release();
            return proyectos;
        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async find(nombre) {
        try {
            const connection = await db();
            const [rows] = await connection.execute('Select * from proyecto WHERE NomProyecto = ?', [nombre]);
            await connection.release();
            return rows.length > 0 ? rows[0].id : null;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error; 
        }
    }
}