Template.loginModal.showLoginModal = function () {
	return Session.equals("showLoginModal", true);
};

Template.loginModal.events({
	'click #login' : function (event, template) {
		var email = template.find("#email").value;
		var password = template.find("#password").value;

		Meteor.loginWithPassword(email, password, function (err) {
			if (err) {
				// handle error
			}
		});

		Session.set("showLoginModal", false);
	},

	'click .modal .close' : function (event) {
		Session.set("showLoginModal", false);
	}
});