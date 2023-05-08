const teachersController = require("../controllers/teachers.controller");

const {validate_credentials} = require("../controllers/users.controller");

module.exports = (app) => {
    app.get("/api/",teachersController.test);
    app.get("/api/teachers/list",validate_credentials,teachersController.listTeachers);
    app.post("/api/teachers/new", teachersController.createTeacher);
    // app.put("/productos/actualizar/:productoId", teachersController.actualizarTeacher);
    // app.get("/productos/detalle/:productoId", teachersController.detalleTeachers);
    app.delete("/api/teachers/:teacherId", teachersController.deleteTeacher);
    app.get("/api/teachers/:buttonValueCourse/:buttonValueModality/:buttonValueResponse", teachersController.filterTeachers);
}