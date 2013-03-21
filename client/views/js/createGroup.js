Template.createGroup.events({
	"click #createGroup" : function (event, template) {
		var name = template.find("#groupName").value;
		var callback = function (error, result) {
			Session.set("showGroup", result);
		}

		Meteor.call("createGroup", {
			groupname: name
		}, callback);
		
		Session.set("dropInArea", null);
	},

	"click #cancel" : function (event) {
		Session.set("dropInArea", null);
	}
});