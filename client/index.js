  Meteor.subscribe("groups");

 Meteor.startup(function () {
  Meteor.autorun(function () {
    if (! Session.get("showGroup")) {
      var group = Groups.findOne();
      if (group)
        Session.set("showGroup", group._id);
    }
    Session.set("activeView", GroupActions[0].name);
  });
});