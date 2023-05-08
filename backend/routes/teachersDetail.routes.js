const teachersDetailController = require("../controllers/teachersDetail.controller");

module.exports = (app) => {
    app.post("/api/teachersDetail/insert", teachersDetailController.insertTeacherDetail);
    // app.post("/api/users/login", studentsDetailController.loginUser);
    app.get("/api/teachersDetail/:buttonValueCourse/:buttonValueModality/:buttonValueResponse", teachersDetailController.filterTeachers);
}