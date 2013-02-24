Games = new Meteor.Collection("games");

Games.allow({
	insert: function (userId, game) {
		return false;
	},

	update: function (userId, game, fields) {
		return false;
	},

	remove: function (userId, game) {
		return false;
	}
});

Games.schema = {
	"userId": "ObjectId", 
	"groupId": "ObjectId", 
	"active": "bool", 
	"ended": "bool", 
	"num_answered": "int", 
	"num_total": "int", 
	"num_correct": "int", 
	"num_false": "int",
	"actual": 
	[{
		"name": "String",
		"index": "Number"
	}],
	"answer":
	[{
		"name": "String",
		"index": "Number"
	}]
};