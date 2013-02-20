Template.gameView.personExist = function () {
	return this.persons != null;
};

Template.gameView.activeGame = function () {
	return Session.equals("isGameActive", true);
};

Template.gameView.personname = function() {
	var index = Session.get("gamePersonIndex");
	return this.persons[index].name;
};

Template.gameView.events({
	"click #startgame" : function(event, template) {
		var gameId = Meteor.call("startNewGame",{
			groupId: this._id
		},
		function (error, result) {
			Session.set("activeGame", result);
		});

		Session.set("isGameActive", true);
		Session.set("gamePersonIndex", 0);
	},

	"click #answer" : function(event, template) {
		var index = Session.get("gamePersonIndex");
		if (this.persons.length > index + 1) {
			Meteor.call("gameAnswer", {
				answer: template.find("#nameInput").value,
				personIndex: index,
				gameId: Session.get("activeGame")
			});
			Session.set("gamePersonIndex", index + 1);
		}
		else {
			// END GAME
		}
	}
});	