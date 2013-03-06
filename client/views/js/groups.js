Template.groupsView.groups = function() {
	return Groups.find();
};

Template.groupsView.events({
	"click .group-listing": function (event) {
		Session.set("showGroup", this._id);
	}
});

Template.groupsView.events({
	"click .creategroup-listing": function (event) {
		Session.set("dropInArea", "createGroup");
	}
});