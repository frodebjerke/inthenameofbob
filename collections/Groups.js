Groups = new Meteor.Collection("groups");

Groups.allow({
	insert: function (userId, group) {
		return false;
	},

	update: function (userId, groups, fields) {
		return false;
	},

	remove: function (userId, groups) {
		return false;
	}
});