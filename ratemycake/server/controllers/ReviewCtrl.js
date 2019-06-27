const mongoose = require('mongoose');
const Cake = mongoose.model('cakes');
const Review = mongoose.model('reviews');

module.exports = {
    create: (req, res) => {
        // console.log('this is the create method!');
        Review.create(req.body, (err, review) => {
            if(err) res.json(err);
            if(review) {
                Cake.findByIdAndUpdate({_id: req.params.id}, { $push: { reviews: review} }, (err, cake) => {
                    if(err) res.json(err);
                    if(cake) res.json(cake);
                })
            }
        })
        
    },

    
}