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

    async getByProyectoID(ID) {
        try {
            const connection = await db();
            const riesgos = await connection.execute('SELECT * FROM riesgo WHERE ProyectoID = ?', [ID]);
            await connection.release();
            return riesgos;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getByNivelRiesgo() {
        try {
            const connection = await db();
            const riesgos = await connection.execute(`
                SELECT 
                    p.ProyectoID, 
                    p.NomProyecto, 
                    SUM(r.NivelRiesgo) AS SumaNivelRiesgo
                FROM 
                    Proyecto p
                LEFT JOIN 
                    Riesgo r ON p.ProyectoID = r.ProyectoID
                GROUP BY 
                    p.ProyectoID, 
                    p.NomProyecto
                ORDER BY
                	SumaNivelRiesgo DESC;
                `);
            await connection.release();
            return riesgos;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}