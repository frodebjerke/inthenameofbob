  Meteor.startup(function () {
  Meteor.autorun(function () {
    if (! Session.get("showGroup")) {
      var group = Groups.findOne();
      if (group)
        Session.set("showGroup", group._id);
    }
    Session.set("activeView", GroupActions[0].name);
  });

  	Session.set("activeGame", false);
		Session.set("gamePersonIndex", 0);
});