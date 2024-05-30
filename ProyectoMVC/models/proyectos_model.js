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
            `INSERT INTO proyecto (NomProyecto, DescProyecto, FInicioProyecto, FFinalProyecto) VALUES (?, ?, ?, ?)`,
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
            const result = await connection.execute('Select * from proyecto WHERE NomProyecto = ?', [nombre]);
            await connection.release();
            return result;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error; 
        }
    }
}