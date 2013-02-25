Template.groupsView.groups = function() {
	return Groups.find();
};

Template.groupsView.events({
	"click .group": function (event) {
		Session.set("showGroup", this._id);
	}
});

Template.groupsView.events({
	"click #createGroup": function (event) {
		Session.set("dropInArea", "createGroup");
		Session.set("lol", "Hei");
	}
});