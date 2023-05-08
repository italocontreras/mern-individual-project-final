const usersController = require("../controllers/users.controller");

module.exports = (app) => {
    app.post("/api/users/create", usersController.createUser);
    app.get("/api/users/get", usersController.getUser);
    app.post("/api/users/login", usersController.loginUser);
}