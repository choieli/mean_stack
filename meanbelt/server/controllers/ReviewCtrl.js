const mongoose = require('mongoose');
let Task = mongoose.model('Task');
const Review = mongoose.model('reviews');

module.exports = {
    create: (req, res) => {
        // console.log('this is the create method!');
        Review.create(req.body, (err, review) => {
            if(err) res.json(err);
            if(review) {
                Task.findByIdAndUpdate({_id: req.params.id}, { $push: { reviews: review} }, (err, Task) => {
                    if(err) res.json(err);
                    if(Task) res.json(Task);
                })
            }
        })
        
    },

    
}