Meteor.subscribe("groups");

Template.midbar.notSignedIn = function(user) {
	return user == null;
};

Template.midbar.threeGroups = function() {
	return Groups.find();
};

Template.midbar.showAddGroup = function() {
	return Session.equals("showAddGroup", true);	
};

Template.midbar.showGroup = function() {
	var groupId = Session.get("showGroup");
	return Groups.findOne(Session.get("showGroup"));
};

Template.midbar.groupView = function() {
	return GroupViews;
};

Template.midbar.activeView = function() {
	if (Session.equals("activeView", this.name)) {
		return "active";
	}
};

Template.midbar.dashboardIsActive = function() {
	return Session.get("activeView") == GroupViews[0].name;
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

	"click .closeAddGroup": function (event) {
		Session.set("showAddGroup", false);
	},

	"click .group": function (event) {
		Session.set("showGroup", this._id);
	},

	"click .play": function (event) {
		Session.set("play", true);
	},

	"click .manage": function (event) {
		Session.set("manage", true);
	},

	"click .deleteGroup": function(event, template) {
		Session.set("showGroup", false);
		var success = Meteor.call("deleteGroup", this._id);
	},

	"click .view": function(event, template) {
		console.log("HEI");
		Session.set("activeView", this.name);
	}
});  