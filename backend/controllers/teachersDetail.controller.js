const TeachersDetailModel =  require("../models/teachersDetail");
const UsersModel =  require("../models/users");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const key = 'misecretkey'

module.exports.insertTeacherDetail = async (request, response) => {
    // console.log("request",request)
    console.log("insertTeacherDetail")
    // var requestData = request.body;
    console.log("request.body",request.body)
    var {name, lastName,email, password, pass_confirm,type,imageurl,cellphone,course,modality,response:teacherResponse,cost} = request.body

    if (password != pass_confirm) {
        return response.json({error: 'Password are not equals'}, 401)
    }


    try {
        //creo el usuario- (student)
        var encryptedPassword = await bcrypt.hash(password, 10)
        console.log("linea 24 teachers detail controller")
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

        var newTeacher = await TeachersDetailModel.create(
            {
                user:user_id,
                name: name,
                lastName:lastName,
                email: email,
                password: encryptedPassword,
                type:type,
                imageurl:imageurl,
                cellphone:cellphone,
                course:course,
                modality:modality,  
                response:teacherResponse,    
                cost:cost
                // pass_confirm:pass_confirm
            }
            
        );
        console.log("response",response)
        response.json(newTeacher)
    } catch(error) {
        response.json(error);
        console.log("error",error)
    }
}

module.exports.filterTeachers = async (request, response) => {
    var buttonValueCourse = request.params.buttonValueCourse;
    var buttonValueModality = request.params.buttonValueModality;
    var buttonValueResponse = request.params.buttonValueResponse;
    var teachers = await TeachersDetailModel.find({course:buttonValueCourse,modality:buttonValueModality,response:buttonValueResponse});
    response.json(teachers);
}