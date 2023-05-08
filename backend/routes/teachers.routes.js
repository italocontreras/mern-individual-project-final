const teachersController = require("../controllers/teachers.controller");

const {validate_credentials} = require("../controllers/users.controller");

module.exports = (app) => {
    app.get("/",teachersController.test);
    app.get("/teachers/list",validate_credentials,teachersController.listTeachers);
    app.post("/teachers/new", teachersController.createTeacher);
    // app.put("/productos/actualizar/:productoId", teachersController.actualizarTeacher);
    // app.get("/productos/detalle/:productoId", teachersController.detalleTeachers);
    app.delete("/teachers/:teacherId", teachersController.deleteTeacher);
    app.get("/teachers/:buttonValueCourse/:buttonValueModality/:buttonValueResponse", teachersController.filterTeachers);
}