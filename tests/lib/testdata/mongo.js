var MongoExamples = {
	"update" : function() {
		Groups.update(
			{},
			{
				$set: {
					persons : [
					{name : "Bar Rafaeli"},
					{name : "Scarlett Johanson"},
					{name : "Elisha Cuthbert"}
					]
				}
			}
		);
	}
}