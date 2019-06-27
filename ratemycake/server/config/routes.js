let CakeCtrl = require('../controllers/CakeCtrl.js');
const ReviewCtrl = require('../controllers/ReviewCtrl.js');

module.exports = (app) => {

    // app.get('/tasks', TasksCtrl.index);
    // app.post('/tasks', TasksCtrl.create);
    // app.get('/tasks/:id', TasksCtrl.show);
    // app.put('/tasks/:id',TasksCtrl.update);
    // app.delete('/tasks/:id',TasksCtrl.delete);


    app.post('/cakes', CakeCtrl.create);
    app.get('/cakes', CakeCtrl.index);
    // app.post('/cakes/:id/reviews', CakeCtrl.createReview());
    app.post('/cakes/:id/reviews', ReviewCtrl.create);
}