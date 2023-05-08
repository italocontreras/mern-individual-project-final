const StudentsDetailModel =  require("../models/studentsDetail");
const UsersModel =  require("../models/users");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const key = 'misecretkey'

module.exports.insertStudentDetail = async (request, response) => {
    // console.log("request",request)
    console.log("insertStudentDetail")
    // var requestData = request.body;
    console.log("request.body",request.body)
    var {name, lastName,email, password, pass_confirm,type,age,university,interestedCourses} = request.body

    if (password != pass_confirm) {
        return response.json({error: 'Password are not equals'}, 401)
    }


    try {
        //creo el usuario- (student)
        var encryptedPassword = await bcrypt.hash(password, 10)
        console.log("linea 20")
        var newUser = await UsersModel.create(
            {
                name: name,
                lastName:lastName,
                email: email,
                password: encryptedPassword,
                type:type
                // pass_confirm:pass_confirm
            }
        ); 
        //creo el student detail
        console.log("newUser",newUser)   
        
        user_id = newUser._id
        console.log("user_id",user_id)

        // const usuario = await UsersModel.findById(user_id);
        // console.log("usuario",usuario._id)

        var newUser = await StudentsDetailModel.create(
            {
                user:user_id,
                name: name,
                lastName:lastName,
                email: email,
                password: encryptedPassword,
                type:type,
                age:age,
                university:university,
                interestedCourses:interestedCourses
                // pass_confirm:pass_confirm
            }
            
        );
        response.json(newUser)
    } catch(error) {
        response.json(error);
        console.log("error",error)
    }
}

