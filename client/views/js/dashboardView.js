Template.dashboardView.events({
	"click .play": function (event) {
		Session.set("play", true);
	},

	"click .manage": function (event) {
		Session.set("manage", true);
	}
});