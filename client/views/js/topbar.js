Template.topbar.activeHome = function () {
	if (Session.equals("route", "home")) {
		return "active";
	}
}

Template.topbar.activeExplain = function (){
	if (Session.equals("route", "explain")) {
		return "active";
	}
};

Template.topbar.events({
	"click #explain": function (event) {
		app.navigate("explain", {trigger: true});
	},

	"click #home": function (event) {
		app.navigate("home", {trigger: true});
	}
});