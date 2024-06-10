const db = require('./../utils/database.js');

exports.Riesgo = class {
    constructor(my_name, my_desc, my_level, my_ID){
        this.name = my_name;
        this.desc = my_desc;
        this.level = my_level;
        this.ID = my_ID;
    }

    async save() {
        try {
            const connection = await db();
            const result = await connection.execute(
            `INSERT INTO riesgo (NomRiesgo, DescRiesgo, NivelRiesgo, ProyectoID) VALUES (?, ?, ?, ?)`,
            [this.name, this.desc, this.level, this.ID]
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
            const proyectos = await connection.execute('SELECT * FROM riesgo');
            await connection.release();
            return proyectos;
        } catch(error) {
            console.error(error);
            throw error;
        }
    }
}