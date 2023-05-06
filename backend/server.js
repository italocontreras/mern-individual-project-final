// ejecutar npm install antes de correr el proyecto backend

const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/rappi", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("Se conectó correctamente a la bd"))
// .catch(err => console.log("Hubo un error al conectarse a la bd"));

// mongoose.connect("mongodb://localhost:27017/teacherstestv2", {
mongoose.connect("mongodb://0.0.0.0:27017/teacherstestv3", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
.catch(err => console.log("Hubo un error al conectarse a la bd"));

const express = require("express");

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const cors = require('cors')

app.use(cors())

const teachersRoutes = require("./routes/teachers.routes");
teachersRoutes(app);

const usersRoutes = require("./routes/users.routes");
usersRoutes(app);

const server = app.listen(8000, ()=>{
    console.log("Se levanto el servidor en el puerto 8000");
})