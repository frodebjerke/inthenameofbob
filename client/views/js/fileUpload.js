Template.fileUpload.events({
	'change input' : function (event, template) {
		var personname = this.name
		var img = template.find("input").files[0];
		var reader = new FileReader();
		reader.onload = function (e) {
			Meteor.call("uploadPersonImage", Session.get("showGroup"), personname, e.target.result);
		};

		reader.readAsDataURL(img);
	}
});