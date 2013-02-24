Template.topbar.activeExplain = function (){
	console.log(Session.get("dropInArea"));
	if (Session.equals("dropInArea", "explain")) {
		console.log(Session.get("dropInArea"));

		return "active";
	}
};

Template.topbar.activeCreateGroup = function () {
	if (Session.equals("dropInArea", "createGroup")) {
		return "active";
	}
}

Template.topbar.events({
	"click #explain" : function (event, template) {
		Session.set("dropInArea", "explain");
	},

	"click #addGroup" : function (event, template) {
		Session.set("dropInArea", "createGroup");
	}
});