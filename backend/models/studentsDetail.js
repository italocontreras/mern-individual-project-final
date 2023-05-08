const mongoose = require("mongoose");

const { Schema } = require('mongoose');

const Users = require('./users');

const StudentsDetailSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: Users,
        required:true
    },
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
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    university:{
        type:String,
        required: [true, "Type is required"]
    },
    interestedCourses:{
        type:String,
        required: [true, "Interested Courses is required"]
    }
});

const StudentsDetail = mongoose.model("studentsDetail", StudentsDetailSchema);
module.exports = StudentsDetail;
