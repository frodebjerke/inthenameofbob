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

Template.topbar.activeCreateGroup = function () {
	if (Session.equals("route", "createGroup")) {
		return "active";
	}
};