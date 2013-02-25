var Router = Backbone.Router.extend({
	routes: {
		"explain": "explain",
		"createGroup": "createGroup",
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

	createGroup: function () {
		Session.set("route", "createGroup");
	},

	fail: function () {
		Session.set("route", "fail");
	}
});

var app = new Router;