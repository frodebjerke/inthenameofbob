Template.manageView.showAddPerson = function () {
	return Session.equals("showAddPerson", true);
};

Template.manageView.showPersons = function () {
	return Session.equlas("showPersons", true);
};

Template.manageView.events({
	"click #deleteGroup": function(event, template) {
		Session.set("showGroup", false);
		var success = Meteor.call("deleteGroup", this._id);
	},

	"click #addPerson": function(event, template) {
		Session.set("showAddPerson", true);
	},

	"click #submitName": function(event, template) {
		console.log("In addPersonName");
		var newName = template.find("#personName").value;
		var success = Meteor.call("addPersonName", this._id, {
			name: newName
		});
		Session.set("showAddPerson", false);
	},

	"click .closeAddPerson": function (event) {
		Session.set("showAddPerson", false);
	}, 

	
/*
	"click #updatePerson": function(event, template) {

	},

	"click #deletePerson": function(event, template) {
		var success = Meteor.call("deletePerson", {
			personId = this._id
		});
	}
*/
});


