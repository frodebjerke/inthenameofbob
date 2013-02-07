Meteor.subscribe("groups");

Template.midbar.notSignedIn = function(user) {
	return user == null;
};

Template.midbar.groups = function() {
	return Groups.find();
};

Template.midbar.showAddGroup = function() {
	return Session.equals("showAddGroup", true);	
};

Template.midbar.showGroup = function() {
	var groupId = Session.get("showGroup");
	return Groups.findOne(Session.get("showGroup"));
}

Template.midbar.events({

	"click #createGroup" : function (event, template) {
		var name = template.find("#groupName").value;
		var success = Meteor.call("createGroup", {
			groupname: name
		});
		Session.set("showAddGroup", false);
	},

	"click #addGroup": function (event) {
		Session.set("showAddGroup", true);
	},

	"click .group": function (event) {
		Session.set("showGroup", event.srcElement.id);
	}
});  