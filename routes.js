  //API  routes file
var CacheController = require('./controllers/cache');

module.exports.init= function(app) {
	app.post('/cache/:key', CacheController.createOrUpdateCache);
	app.put('/cache/:key', CacheController.createOrUpdateCache);
	app.get('/cache/:key', CacheController.readCache);
	app.get('/cache', CacheController.listCache);
	app.delete('/cache/:key', CacheController.deleteCache);
	app.delete('/cache', CacheController.deleteAllCache);
};