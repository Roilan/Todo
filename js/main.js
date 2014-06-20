$(document).ready(function() {

	var taskList = [];

	$('.btn-add').click(function() {
		var x = prompt('Enter task');
		taskList.push(x);

		var newItem = '<li>' + x + '</li>';

		$('ul').append(newItem);

		$('li').css('color', 'black');
		$('li').click(function() {
			$(this).css('color', 'red');
		});
	});

	$('.btn-clear').click(function() {
		taskList = [];

		$('ul').text('');
	});
});