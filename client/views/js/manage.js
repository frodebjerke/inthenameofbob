Template.manageView.showAddPerson = function () {
	return Session.equals("showAddPerson", true);
};

Template.manageView.events({
	"click #deleteGroup": function(event, template) {
		Session.set("showGroup", false);
		Meteor.call("deleteGroup", this._id);
	},

	"click #showAddPerson": function(event, template) {
		Session.set("showAddPerson", !Session.get("showAddPerson"));
	},

	"click .closeAddPerson": function (event,template) {
		Session.set("showAddPerson", false);
	},

	"click #submitPerson": function(event, template) {
		var newName = template.find("#personName").value;
		var img = template.find(".img-upload").files[0];
		var reader = new FileReader();
		var groupId = this._id;

		reader.onload = function (e) {
			Meteor.call("addPerson", groupId, {
				name: newName,
				image: e.target.result
			});
		};

		reader.readAsDataURL(img);
		Session.set("showAddPerson", false);
	},

	"click .deletePerson": function(event, template) {
		Meteor.call("deletePersonFromList", Session.get("showGroup"), this.name);
	},

	"change .person .img-upload" : function(event, template) {
		var personname = this.name;
		var img = template.find(".img-upload").files[0];
		var reader = new FileReader();
		reader.onload = function (e) {
			e.target.result;
			Meteor.call("uploadPersonImage", Session.get("showGroup"), personname, e.target.result);
		};

		reader.readAsDataURL(img);
	}
});


