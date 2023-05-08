const mongoose = require("mongoose");


const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    type:{
        type:String,
        // required: [true, "Type is required"]
    }
    
});

const Users = mongoose.model("users", UsersSchema);
module.exports = Users;