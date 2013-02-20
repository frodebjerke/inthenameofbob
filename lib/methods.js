Meteor.methods({
	deleteGroup: function (groupId) {
		Groups.remove(groupId);
	},

	groupnameExists: function (name) {
		var checkName = Groups.find ({
			groupname: name
		})

		if (checkName.count() == 0) {
			return false;
		} else {				
			return true;
		}
	},

	addPersons: function (groupId, p) {
		Groups.update(groupId, {$set: {persons: p}});
	},

	createGroup: function (options) {
		options = options || {};

		if (options.groupname.length > 100) {
			throw new Meteor.Error(403, "Name of group is too long.");
		};
		if (! this.userId) {
			throw new Meteor.Error(403, "You must be logged in to create a group.");
		};
		if (Meteor.call("groupnameExists", options.groupname)) {
			throw new Meteor.Error(403, "A group with this name allready exist.");
		} else {
			return Groups.insert({
				groupOwner: this.userId,
				groupname: options.groupname,
				persons: options.persons
			});
		}
	},

	startNewGame: function(options) {
		options = options || {};

		var group = Groups.findOne(options.groupId, {reactive: false});
		var questions = [];
		for (index in group.persons) {
			questions.push({name: group.persons[index].name, index: index, correct: false});
		}

		return Games.insert({
			userId: this.userId,
			groupId: options.groupId,
			active: true,
			ended: false,
			num_answered: 0,
			num_total: questions.length,
			num_correct: 0,
			num_false: 0,
			questions: questions
		});
	},

	gameAnswer: function(options) {
		options = options || {};

		var questions = Games.findOne(options.gameId).questions;
		console.log(questions);
		var question = questions[options.personIndex];
		question.answer = options.answer;
		question.correct = question.answer == question.name;
		questions[options.personIndex] = question;

		var correct = 0;
		if (question.correct) correct = 1;

		console.log(questions);

		Games.update({
			_id: options.gameId
		},{
			$set: {
				questions: questions
			},
			$inc: {
				"num_answered": 1,
				"num_correct": correct
			}	
		});

	}, 

	gameEnd: function(options) {
		options = options || {};

		Games.update({
			_id: options.gameId
		},{
			$set: {active: false, ended: true}
		});
	}
});