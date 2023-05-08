const usersController = require("../controllers/users.controller");

module.exports = (app) => {
    app.post("/api/users/create", usersController.createUser);
    app.post("/api/users/login", usersController.loginUser);
}