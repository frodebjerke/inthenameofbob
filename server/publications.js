Meteor.publish("groups", function () {
	return Groups.find ({
		groupOwner: this.userId
	});
});

Meteor.publish("games", function () {
	return Games.find({	
		userId: this.userId
	});
});