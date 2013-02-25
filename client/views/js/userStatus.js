Template.userStatus.printEmail = function () {
	return this.emails[0].address;
};

Template.userStatus.events({
	'click #showUser' : function (event) {
		console.log("SHOW USER. Not yet implemented");
	},

	'click #signout' : function (event) {
		Meteor.logout(function (err) {
			// handle error
		});
	},

	'click #login' : function (event) {
		Session.set("showLogin", true);
	}

});