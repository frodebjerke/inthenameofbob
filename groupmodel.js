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
				groupname: options.groupname
			});
		}
	}
});
