Template.dropInArea.showDropInArea = function () {
	var inArea = Session.get("dropInArea");
	return inArea != null;
};

Template.dropInArea.showExplain = function () {
	return Session.equals("dropInArea", "explain");
};

Template.dropInArea.showCreateGroup = function () {
	return Session.equals("dropInArea", "createGroup")
}

Template.dropInArea.events({
	"click #closeDropInArea" : function (event) {
		Session.set("dropInArea", null);
	}
});