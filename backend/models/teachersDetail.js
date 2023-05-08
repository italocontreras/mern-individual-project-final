const mongoose = require("mongoose");

const { Schema } = require('mongoose');

const Users = require('./users');

const TeachersDetailSchema = new mongoose.Schema({
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
    imageurl:{
        type:String,
        required: [true, "Image URL is required"]
    },
    cellphone:{
        type:Number,
        required: [true, "Cellphone Courses is required"]
    },
    course:{
        type:String,
        required: [true, "Course is required"]
    },
    modality:{
        type:String,
        required: [true, "Modality is required"]
    },
    response:{
        type:String,
        required: [true, "Response is required"]
    },
    cost:{
        type:Number,
        required: [true, "Cost Courses is required"]
    },
});

const TeachersDetail = mongoose.model("teachersDetail", TeachersDetailSchema);
module.exports = TeachersDetail;
