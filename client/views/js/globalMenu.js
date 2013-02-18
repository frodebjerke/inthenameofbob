Template.globalMenuView.showAddGroup = function() {
	return Session.equals("showAddGroup", true);	
};

Template.globalMenuView.events({
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
	}
});