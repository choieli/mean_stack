let TasksCtrl = require('../controllers/TasksCtrl.js');
const ReviewCtrl = require('../controllers/ReviewCtrl.js');

module.exports = (app) => {

    app.get('/reviews/:id/reviews', TasksCtrl.index);
    // app.post('/tasks', TasksCtrl.create);
    app.get('/update/:id', TasksCtrl.show);
    // app.put('/friend/:id/edit',TasksCtrl.update);
    app.delete('/update/:id',TasksCtrl.delete);
    app.get('/new', TasksCtrl.index);
    app.post('/new', TasksCtrl.create);
    app.put('/update/:id/edit',TasksCtrl.update);
    app.post('/new/:id/reviews', ReviewCtrl.create);
    app.get('/',TasksCtrl.index);



    

}