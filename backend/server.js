const mongoose = require("mongoose");


mongoose.connect("mongodb://0.0.0.0:27017/teacherstestv7", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
.catch(err => {
    console.log("Hubo un error al conectarse a la bd")
    console.log(err)
});

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


const usersRoutes = require("./routes/users.routes");
usersRoutes(app);

const studentsDetailRoutes = require("./routes/studentsDetail.routes");
studentsDetailRoutes(app);

const teachersDetailRoutes = require("./routes/teachersDetail.routes");
teachersDetailRoutes(app);

const server = app.listen(8000, ()=>{
    console.log("Se levanto el servidor en el puerto 8000");
})