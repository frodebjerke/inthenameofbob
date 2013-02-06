Meteor.subscribe("groups");

Template.midbar.notSignedIn = function(user) {
	return user == null;
};

Template.midbar.groups = function() {
	return Groups.find();
};

Template.midbar.events({
	"click .createGroup" : function (event, template) {

		var name = template.find(".groupname").value;
		console.log('name '+name);
		Meteor.call("createGroup", {
			groupname: name
		})
	}
});  