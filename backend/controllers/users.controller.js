const UsersModel =  require("../models/users");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const key = 'misecretkey'

module.exports.createUser = async (request, response) => {
    console.log("request",request)
    // var requestData = request.body;
    var {name, lastName,email, password, pass_confirm} = request.body

    if (password != pass_confirm) {
        return response.json({error: 'Password are not equals'}, 401)
    }

    try {
        var encryptedPassword = await bcrypt.hash(password, 10)
        var newUser = await UsersModel.create(
            {
                name: name,
                lastName:lastName,
                email: email,
                password: encryptedPassword
                // pass_confirm:pass_confirm
            }
        );    
        response.json(newUser);
    } catch(error) {
        response.json(error);
    }
}

module.exports.loginUser = async (request, response) => {
    console.log("login user")
    console.log("resquest.body",request.body)
    // var requestBody = request.body;
    var {email, password} = request.body

    // var userFound = await UsersModel.findOne({ email: "ricardo.vasquez@gmail.com", password: "12345678" });
    var user = await UsersModel.findOne({email: email});
    console.log("user",user);

    if (user == null) {
        return response.status(404).json({error: 'incorrect credentials'})
    }

    var areEqual = await bcrypt.compare(password, user.password)
    console.log("areEqual",areEqual);

    if (!areEqual) {
        console.log("incorrect credentials")
        // response.json({error: 'Usuario inexistente'},204)
        return response.status(404).json({error: 'incorrect credentials'})
         
    }

    const token = jwt.sign({
        _id: user._id
    }, key)

    // 6. Devolvemos el usuario y el token (la credencial)
    response.json({user: user, token: token})

}

module.exports.validate_credentials = function (request, response, next) {
    // 1. Validamos que tenga authorization en el Header
    if (!request.headers.authorization) {
      return response.json({error: 'no access'}, 401)
    }
    // 2. validamos que el token este correcto
    var token = request.headers.authorization.split(' ')[1]
    var is_valid;
    try {
        is_valid = jwt.verify(token, key)
    }
    catch (error) {
      return response.json({error: 'no access'}, 401)
    }
    
    if (!is_valid) {
      return response.json({error: 'no access'}, 401)
    }
    // 3. Si llegamos hasta acá. Si tiene autorizacion
    next()
  }