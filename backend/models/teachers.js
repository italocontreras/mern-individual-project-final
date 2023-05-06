const mongoose = require("mongoose");

// const ProductosSchema = new mongoose.Schema({
//     nombre: String,
//     precio: Number,
//     cantidad: Number
// });

const TeachersSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    cellphone: String,
    course: String,
    modality: String,
    response: String,
    cost: Number
});


const Teachers = mongoose.model("teachers", TeachersSchema);
module.exports = Teachers;