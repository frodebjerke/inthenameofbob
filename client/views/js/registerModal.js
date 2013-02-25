Template.registerModal.showRegisterModal = function () {
	return Session.equals("showRegisterModal", true);
};

Template.registerModal.events({
	'click #register' : function (event, template) {
		var options = {};
		options.email = template.find("#email").value;
		options.password = template.find("#password").value;

		Accounts.createUser(options, function (err) {
			if (err) {
				// handle error
			}
		});

		Session.set("showRegisterModal", false);
	}
});