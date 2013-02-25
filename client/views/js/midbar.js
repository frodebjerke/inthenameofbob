Template.midbar.main = function () {
	return Session.equals("route", "home");
};

Template.midbar.explain = function () {
	return Session.equals("route", "explain");
};

Template.midbar.createGroup = function () {
	return Session.equals("route", "createGroup");
}