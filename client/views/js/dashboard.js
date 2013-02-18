Template.dashboardView.events({
	"click .play": function (event) {
		Session.set("activeView", "Game");
	},

	"click .manage": function (event) {
		Session.set("activeView", "Manage");
	}
});