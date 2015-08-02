TodoView = Backbone.View.extend({
	el: 'body',
	// caching the template func
	todoTmplt: _.template(getTemplate('todo')),

	events: {
		'click .submit': 'getData',
	},

	model: new TodoModel(),
	getData: function() {
		console.log('getDatA');
		var drinkTitle = $('.drinky').val();
		var costTitle = $('.cost').val();
		this.model.set({drink:drinkTitle, cost:costTitle});
		console.log(drinkTitle, costTitle);
		this.render();

	},

	render: function() {
		// var renderDiv = this.$el.find('#drink-list');
		// $('#drink-list').append(this.todoTmplt(this.model.attributes));
		$(this.todoTmplt(this.model.attributes)).appendTo(this.$el.find('#drink-list'));
	},

});

new TodoView();