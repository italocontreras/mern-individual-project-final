const TeachersModel = require("../models/teachers");

// module.exports.listarProductos = async (request, response) => {
//     var result = await ProductosModel.find();
//     response.json(result);
// }

// module.exports.crearProductos = async (request, response) => {
//     var data = request.body;
    
//     var nuevoProducto = new ProductosModel(data);
//     var result = await nuevoProducto.save();

//     response.json(result);
// }

module.exports.listTeachers = async (request, response) => {
    var result = await TeachersModel.find();
    response.json(result);
}

module.exports.createTeacher = async (request, response) => {
    var data = request.body;
    
    var newTeacher = new TeachersModel(data);
    var result = await newTeacher.save();

    response.json(result);
}

// module.exports.actualizarProducto = async (request, response) => {
//     var id = request.params.productoId;
//     var data = request.body;

//     await ProductosModel.findOneAndUpdate({"_id": id}, data);

//     response.json({
//         "status": "ok"
//     });
// }

// module.exports.detalleProducto = async (request, response) => {
//     var id = request.params.productoId;
//     var producto = await ProductosModel.findOne({_id: id});
//     response.json(producto);
// }

module.exports.deleteTeacher = async (request, response) => {
    var id = request.params.teacherId;
    

    await TeachersModel.deleteOne({"_id": id});

    response.json({
        "status": "ok"
    });
}

module.exports.filterTeachers = async (request, response) => {
    var buttonValueCourse = request.params.buttonValueCourse;
    var buttonValueModality = request.params.buttonValueModality;
    var buttonValueResponse = request.params.buttonValueResponse;
    var teachers = await TeachersModel.find({course:buttonValueCourse,modality:buttonValueModality,response:buttonValueResponse});
    response.json(teachers);
}
