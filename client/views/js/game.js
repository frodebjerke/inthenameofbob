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

Template.gameView.imageRaw = function() {
	var index = Session.get("gamePersonIndex");
	return this.persons[index].image;
}

Template.gameView.hasEndedGame = function() {
	return Session.get("activeGame");
};

Template.gameView.game = function() {
	return Games.findOne(Session.get("activeGame"));
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
		Meteor.call("gameAnswer", {
			answer: template.find("#nameInput").value,
			personIndex: index,
			gameId: Session.get("activeGame")
		});

		template.find("#nameInput").value = "";
		Session.set("gamePersonIndex", index + 1);

		if (this.persons.length <= index + 1){
			Meteor.call("gameEnd", {
				gameId: Session.get("activeGame")
			});
			Session.set("isGameActive", false);
		}
	}
});	