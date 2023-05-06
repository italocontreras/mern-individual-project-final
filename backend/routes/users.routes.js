const usersController = require("../controllers/users.controller");

module.exports = (app) => {
    app.post("/users/create", usersController.createUser);
    app.post("/users/login", usersController.loginUser);
}