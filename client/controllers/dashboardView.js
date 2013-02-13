Template.dashboardView.events({
	"click .play": function (event) {
		Session.set("play", true);
	},

	"click .manage": function (event) {
		Session.set("manage", true);
	},
	
	"click .deleteGroup": function(event, template) {
		Session.set("showGroup", false);
		var success = Meteor.call("deleteGroup", this._id);
	}
});