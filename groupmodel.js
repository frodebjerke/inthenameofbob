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

Meteor.methods({
	createGroup: function (options) {
		options = options || {};

		if (options.groupname.length > 100) {
			throw new Meteor.Error(403, "Name of group is too long!");
		};
		if (! this.userId) {
			throw new Meteor.Error(403, "You must be logged in to create a group.");
		};

		return Groups.insert({
			groupOwner: this.userId,
			groupname: options.groupname

		});
	}
});