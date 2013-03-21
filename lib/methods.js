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

	addPerson: function (groupId, person) {
		if (person.name.length === 0) {
			throw new Meteor.Error(403, "This person needs a name.");
		} else if (person.image.length === 0) {
			throw new Meteor.Error(403, "No image added.");
		} else if (person.image.length > MAX_IMG_SIZE) {
			throw new Meteor.Error(403, "Image size is to large.", person.image.length);
		} else {
			Groups.update(groupId, {$push: {persons: person}});
		}
	},

	updatePerson: function (groupId, p) {
		Groups.update(groupId, {$set: {persons: p}});	
	},

	deletePersonFromList: function (groupId, name) {
		var listOfPersons = Groups.findOne(groupId).persons;
		var index = listOfPersons.indexOf(name);
		listOfPersons.splice(index, 1);

		Groups.update(groupId, {$set: {persons: listOfPersons}});
	},

	showAllPersons: function (groupId) {

	},

	createGroup: function (options) {
		options = options || {};
		options.persons = options.persons || [];

		if (options.groupname.length == 0) {
			throw new Meteor.Error(403, "Bob thinks this group needs a name.");
		};

		if (options.groupname.length > 100) {
			throw new Meteor.Error(403, "Bob thinks the name of this group is too long.");
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
		var question = questions[options.personIndex];
		question.answer = options.answer;
		question.correct = question.answer == question.name;
		questions[options.personIndex] = question;

		var correct = 0;
		if (question.correct) correct = 1;

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
	},

	uploadPersonImage: function(groupId, personname, img) {
		var personlist = Groups.findOne(groupId).persons;
		var index = personlist.reduce(function (cur, val, index) {
			if (val.name === personname && cur === -1) {
				return index;
			}
			return cur;
		}, -1);
		personlist[index].image = img;
		Groups.update(groupId, {$set: {persons: personlist}});
	}
});
