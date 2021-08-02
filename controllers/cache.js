var models = require('../models');
var Promise = require('bluebird');
var crypto = require("crypto");

// create or update cache
module.exports.createOrUpdateCache =  Promise.coroutine(function* (req, res) {
	if (!req.body.content) {
    return res.status(401).send({
      message: 'Bad request: Paramter content is required'
    });
  }
  try {
    var cache = yield models.Cache.findOne({
      key: req.params.key
    }).exec();
    if (cache) {
      cache.content = req.body.content;
      cache.modifiedAt = new Date();
      yield cache.save();
    } else {
      cache = yield models.Cache.create({
        key: req.params.key,
        content: req.body.content
      });
    }
    res.status(200).send({
      message: 'Content has been successfully added in db.',
      data: cache.content
    });
  } catch (err) {
    res.status(400).send("Unexpected error occured, Error: ", err);
  }
});


module.exports.readCache = Promise.coroutine(function* (req, res) {
  try {
    var cache = yield models.Cache.findOne({
      key: req.params.key
    }).exec();
    var response = {};
    if (cache) {
      if (Date.parse(cache.modifiedAt) + (cache.ttl * 1000) < Date.now()) {
        cache.content = crypto.randomBytes(20).toString('hex');
        cache.save();
        message = 'Cache miss';
      } else {
        message = 'Cache hit';
      }
    } else {
      cache = yield models.Cache.create({
        key: req.params.key,
        content: crypto.randomBytes(20).toString('hex')
      });
      message = 'Cache miss';
    }
    res.status(200).send({
      message: message,
      data: cache.content
    });
  } catch (err) {
    res.status(400).send("Unexpected error occured, Error: ", err);
  }
});

