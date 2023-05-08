const studentsDetailController = require("../controllers/studentsDetail.controller");

module.exports = (app) => {
    app.post("/api/studentsDetail/insert", studentsDetailController.insertStudentDetail);
    // app.post("/api/users/login", studentsDetailController.loginUser);
}