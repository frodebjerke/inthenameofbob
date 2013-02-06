Meteor.publish("groups", function () {
	return Groups.find ({
		groupOwner: this.userId
	});
});