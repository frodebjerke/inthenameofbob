Template.registerModal.showRegisterModal = function () {
	return Session.equals("showRegisterModal", true);
};

Template.registerModal.enableRegister = function () {
	if (Session.equals("enableRegister", false)) {
		return "disabled";
	}
}

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
	},

	'click .close' : function (event, template) {
		Session.set("showRegisterModal", false);
	},

	"keyup input" : function (event, template) {
		var pw = template.find("#password").value;
		var pwVerify = template.find("#pwVerify").value;

		if (pw.length == 0) {
			Session.set("enableRegister", false);
		} else if (pw === pwVerify) {
			Session.set("enableRegister", true);
		} else {
			Session.set("enableRegister", false);
		}
	}
});