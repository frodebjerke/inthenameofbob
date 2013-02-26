Template.navbar.activeHome = function () {
	if (Session.equals("route", "home")) {
		return "active";
	}
}

Template.navbar.activeExplain = function (){
	if (Session.equals("route", "explain")) {
		return "active";
	}
};

Template.navbar.events({
	"click #explain": function (event) {
		app.navigate("explain", {trigger: true});
	},

	"click #home": function (event) {
		app.navigate("home", {trigger: true});
	}
});