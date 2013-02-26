Template.midbar.main = function () {
	return Session.equals("route", "home");
};

Template.midbar.explain = function () {
	return Session.equals("route", "explain");
};