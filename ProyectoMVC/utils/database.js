const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"1234",
    database: "appix",
    connectionLimit:5
})

module.exports = async () => {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        throw error; // Re-throw the error for proper handling
    }
};