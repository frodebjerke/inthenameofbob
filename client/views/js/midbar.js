Template.midbar.notSignedIn = function() {
	return Meteor.userId() == null;
};