
var friends = require('../data/friends.js');

//GET friends and POST friends
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		var user = friends.friendsList;
		res.json(user);
	});

	app.post('/api/friends', function(req, res){
		friends.friendsList.push(req.body);
	})
};