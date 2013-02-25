var Router = Backbone.Router.extend({
	routes: {
		"explain": "explain",
		"home": "main",
		"": "main",
		":other": "fail" // catch all
	},

	main: function (route) {
		Session.set("route", "home");
	},

	explain: function () {
		Session.set("route", "explain");
	},

	fail: function () {
		Session.set("route", "fail");
	}
});

var app = new Router;