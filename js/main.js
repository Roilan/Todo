$(document).ready(function() {

	var taskList = [];
	var btn = '<button class="btn-lst-mod">Modify</button>';

	function clickList() {
		// allows li to be marked completed(slash) on click
		$('li').click(function() {
			$(this).css('text-decoration', 'line-through');
		});
	}

	$('ul').on('click', '.btn-lst-mod', function() {
		// calls prompt for changing task, adds to li with button
		var x = prompt('Change task');
		x = '<li>' + x + btn + '</li>';

		// replaces current li with modified
		$(this).parents('li').replaceWith(x);

		clickList();
	});

	$('.btn-add').click(function() {
		// calls prompt for task, adds to li and array
		var x = prompt('Enter task');
		taskList.push(x);

		// adds new task to end of list
		var newTask = '<li>' + x + btn + '</li>';
		$('ul').append(newTask);

		clickList();
	});

	$('.btn-clear').click(function() {
		//clear array and ul
		taskList = [];

		$('ul').text('');
	});

	$('.btn-clear-last').click(function() {
		// remove last li
		$('ul li:last-child').remove();

		//remove last li from array
		taskList.pop();
	});
});