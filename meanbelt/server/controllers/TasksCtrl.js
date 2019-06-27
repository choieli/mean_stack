let mongoose = require('mongoose');
let Task = mongoose.model('Task');


module.exports = {
    index: (req,res) => {
        Task.find({}, (err, data) => {
        if (err) { res.json(err)}
        else {res.json(data);}
        });
    },

    create: (req,res) => {
        Task.create(req.body, (err, data) => {
            if (err) { res.json(err)}
            else {res.json(data);}
        });
    },

    show: (req,res) => {
        var id={
            "_id":req.params.id
        }
        Task.findOne(id, (err,data) => {
            if (err){
                 res.json(err)
            }
            else {
                res.json(data);
            }
        })
    },

    update : (req, res) => {
        Task.updateOne({_id: req.params.id},{ $set : req.body }, {runValidators:true}, (err, data) => {
            if (err) { res.json(err)}
            else {res.json(data);}
        });
    },

    delete : (req,res) => {
        Task.remove({_id:req.params.id}, (err, data)=> {
            if (err) { res.json(err)}
            else {res.json(data);}
        });
    }

    // indexTwo : function(req,res){
    //     Task.find({}, function (err, quotesList) {
    //     // console.log('finding quotes', quotes);
    //     if (err) { console.log(err);}
    //     res.render('quotesList',{quotesList:quotesList});
    //     });
    // },

    // create : function(req, res){
    //     Task.create(req.body, function (err, result) {
    //         if (err) { console.log(err); }
    //         res.redirect('/quotes');
    //     });
    // },

    // delete : function(req, res){
    //     Task.remove(req.body, function (err, result) {
    //         if (err) { console.log(err); }
    //         res.redirect('/quotes');
    //     });
    // },
}