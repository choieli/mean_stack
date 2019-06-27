const mongoose = require('mongoose');
const Cake = mongoose.model('cakes');


module.exports = {
    create: (req, res) => {
        // console.log('this is the create method!');
        Cake.create(req.body, (err, cake) => {
            if(err) res.json(err);
            if(cake) res.json(cake);
        })
        
    },

    index: (req,res) => {
        Cake.find({}, (err, data) => {
        if (err) { res.json(err)}
        else {res.json(data);}
        });
    }
}