// Test the client in this example
Meteor = {
	'is_client': true,
	'is_server': false
};

// Create a dummy 'hello' template object
Template = {
	'midbar': {}
};

describe('Meteor client-side code', function(){

	describe('Template.midbar', function(){

		describe('#notSignedIn()', function(){
			it('should return false when user is signed in', function(){
				Meteor.userId = function() {return "42"};
				chai.assert.equal(false , Template.midbar.notSignedIn());
			});
			it('should return true when user not signed in', function(){
				Meteor.userId = function() {return null};
				chai.assert.equal(true, Template.midbar.notSignedIn());
			});
		});
	});

});
