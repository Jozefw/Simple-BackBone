var TodoModel = Backbone.Model.extend({
	defaults: {
		drink: 'none',
		cost: '1',
	},

	initialize: function() {
		this.on('change:title', function() {
			console.log("title as changed");
		});
	},


});