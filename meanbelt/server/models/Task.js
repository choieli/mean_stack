const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {type: String,required:[true,"Name is required"],minlength:[3,"Min is 3"]},
    star: Number,
    description: {type: String,required:[true,"Description is required"],minlength:[3,"Min is 3"]}
    }, { timestamps: true})

const TaskSchema = new mongoose.Schema({
    title:{type: String,required:[true,"Title is required"],minlength:[3,"Min is 3"]},
    type:{type: String,required:[true,"Type is required"],minlength:[3,"Min is 3"]},
    description: {type: String,required:[true,"Description is required"],minlength:[3,"Min is 3"]},
    skill1: String,
    skill2: String,
    skill3: String,
    like: Number,
    completed: {type: Boolean, default: false},
    reviews: [ReviewSchema]
    }, {timestamps: true })


    mongoose.model('reviews',ReviewSchema);
    mongoose.model('Task',TaskSchema);