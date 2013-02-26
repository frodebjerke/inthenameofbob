Template.createGroup.events({
	"click #createGroup" : function (event, template) {
		var name = template.find("#groupName").value;
		var success = Meteor.call("createGroup", {
			groupname: name
		});

		Session.set("dropInArea", null);
	},

	"click #cancel" : function (event) {
		Session.set("dropInArea", null);
	}
});