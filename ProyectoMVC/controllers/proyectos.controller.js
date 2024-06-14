const model = require('./../models/proyectos_model.js');

module.exports.post_registro = async(req, res) => {
    try {
        const name = req.body.titulo;
        const desc = req.body.descripcion;
        const inicio = req.body.inicio;
        const final = req.body.fin;
    
        const proyect = new model.Proyecto(name, desc, inicio, final);
        const savedProyect = await proyect.save();

        res.status(201).redirect("/appix/registro");
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No jala" });
    }
}

module.exports.get_proyectos = async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    try {
        const proyect = new model.Proyecto();
        const proyectos = await proyect.get(skip, limit);
        const totalProyectos = await proyect.count();
        
        res.status(200).json({
            proyectos: proyectos,
            totalProyectos: totalProyectos,
            paginaActual: page,
            totalPaginas: Math.ceil(totalProyectos / limit)
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error al obtener los proyectos' });
    }
};

module.exports.find = async (req, res) => {
    try {
        const nombre = req.body.titulo;
        const proyect = new model.Proyecto();
        const findedProyect = await proyect.find(nombre);
        return res.status(200).json({ id: findedProyect });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No jala el find" });
    }
}

module.exports.get_proyectos_por_final = async (req, res) => {
    try {
        const proyect = new model.Proyecto();
        const final = await proyect.getByFechaFinal();
        return res.status(200).json({ proyecto:final })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "No jala UnU" });
    }
};


