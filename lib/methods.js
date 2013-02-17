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
	}
});