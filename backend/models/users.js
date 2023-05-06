const mongoose = require("mongoose");

// const UsuariosSchema = new mongoose.Schema({
//     nombre: {
//         type: String,
//         required: [true, "El nombre es requerido"]
//     },
//     apellido: {
//         type: String,
//         required: [true, "El apellido es requerido"]
//     },
//     email: {
//         type: String,
//         required: [true, "El email es requerido"],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [true, "El password es requerido"]
//     }
// });

// const Usuarios = mongoose.model("usuarios", UsuariosSchema);
// module.exports = Usuarios;

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    lastName: {
        type: String,
        required: [true, "El apellido es requerido"]
    },
    email: {
        type: String,
        required: [true, "El email es requerido"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "El password es requerido"]
    },
});

const Users = mongoose.model("users", UsersSchema);
module.exports = Users;