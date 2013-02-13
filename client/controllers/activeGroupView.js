Template.activeGroupView.activeGroup = function() {
	var groupId = Session.get("showGroup");
	return Groups.findOne(Session.get("showGroup"));
};

Template.activeGroupView.activeView = function() {
	if (Session.equals("activeView", this.name)) {
		return "active";
	}
};

Template.activeGroupView.dashboardIsActive = function() {
	return Session.get("activeView") == GroupActions[0].name;
};

Template.activeGroupView.groupAction = function() {
	return GroupActions;
}; 

Template.activeGroupView.events({
	"click .view": function(event, template) {
		Session.set("activeView", this.name);
	}
})