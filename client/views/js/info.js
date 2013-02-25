Template.infoView.events({
	'click #login': function (event) {
		Session.set("showLoginModal", true);
	},

	'click #register' : function (event) {
		Session.set("showRegisterModal", true);
	}
});