Template.gameView.personExist = function () {
	return this.persons != null;
};

Template.gameView.activeGame = function () {
	return Session.equals("activeGame", true);
};

Template.gameView.personname = function() {
	var index = Session.get("gamePersonIndex");
	return this.persons[index].name;
};

Template.gameView.events({
	"click #startgame" : function(event, template) {
		Session.set("activeGame", true);
		Session.set("gamePersonIndex", 0);
	},

	"click #answer" : function(event, template) {
		var index = Session.get("gamePersonIndex");
		if (this.persons.length > index + 1) {
			Session.set("gamePersonIndex", index + 1);
		}
		else {
			// END GAME
		}
	}
});