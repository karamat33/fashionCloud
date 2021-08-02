var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = JSON.parse(fs.readFileSync('./config/dbConfig.json', 'utf-8'));
var crypto = require("crypto");


//Cache
var CacheSchema = new Schema({
	key: {
		type: String,
		trim: true,
		index: true
	},
	ttl: {
		type: Number,
		default: 86400 //one day
	},
	content: {
		type: String,
		default: (Math.random() + 1).toString(36).substring(7) //generates a random String
	},
	modifiedAt: {
		type: Date,
		default: Date.now,
		index: true
	},
	createdAt: {
		type: Date,
		default: Date.now,
		index: true
	}
}, {
	collection: 'cache'
});

module.exports = mongoose.model('Cache', CacheSchema);