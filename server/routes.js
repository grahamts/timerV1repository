var home = require('../controllers/home'),
    image = require('../controllers/image');

module.exports.initialize = function(app) {
    app.get('/', home.index);
//    app.get('/about', home.about);
      app.get('/loginform', home.loginform);
 //   app.get('/images/:image_id', image.index);
//    app.get('/timer', home.timer);
    app.post('/images', image.create);
    app.post('/images/:image_id/like', image.like);
    app.post('/images/:image_id/comment', image.comment);
};
