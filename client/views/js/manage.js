Template.manageView.showAddPerson = function () {
	return Session.equals("showAddPerson", true);
};

Template.manageView.showListOfPersons = function () {
	return Session.equals("showListOfPersons", true);
};

Template.manageView.events({
	"click #deleteGroup": function(event, template) {
		Session.set("showGroup", false);
		Meteor.call("deleteGroup", this._id);
	},

	"click #addPerson": function(event, template) {
		Session.set("showAddPerson", true);
	},

	"click .closeAddPerson": function (event,template) {
		Session.set("showAddPerson", false);
	},

	"click #submitName": function(event, template) {
		var newName = template.find("#personName").value;
		Meteor.call("addPersonName", this._id, {
			name: newName
		});
		Session.set("showAddPerson", false);
	},

	"click #showPersons": function(event, template) {
		Session.set("showListOfPersons", true);
	},

	"click .closeShowPersons": function (event,template) {
		Session.set("showListOfPersons", false);
	},
	
	"click .deletePerson": function(event, template) {
		Meteor.call("deletePersonFromList", Session.get("showGroup"), this.name);
	}

/*
	"click #updatePerson": function(event, template) {

	},
*/
});


