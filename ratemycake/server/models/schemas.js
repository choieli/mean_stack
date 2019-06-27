const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
    star: Number,
    description: String
}, { timestamps: true })

const CakeSchema = new mongoose.Schema({
    baker: String,
    imageUrl: String,
    reviews: [ReviewSchema]
}, { timestamps: true })

mongoose.model('reviews', ReviewSchema);
mongoose.model('cakes', CakeSchema);