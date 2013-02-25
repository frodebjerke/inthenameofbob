Template.login.showLogin = function () {
	return Session.equals("showLogin", true);
};

Template.login.events({
	'click #login' : function (event, template) {
		var email = template.find("#email").value;
		var password = template.find("#password").value;

		Meteor.loginWithPassword(email, password, function (err) {
			if (err) {
				// handle error
			}
		});

		Session.set("showLogin", false);
	},

	'click .modal .close' : function (event) {
		Session.set("showLogin", false);
	}
});