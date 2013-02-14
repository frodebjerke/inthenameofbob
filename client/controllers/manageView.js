Template.manageView.events({
	"click .deleteGroup": function(event, template) {
		Session.set("showGroup", false);
		var success = Meteor.call("deleteGroup", this._id);
	}
});