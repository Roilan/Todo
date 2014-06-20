$(document).ready(function() {

	var taskList = [];
	var btn = '<button class="btn-lst-mod">Modify</button>';

	// Calls click on parent element 'ul' for button 'modify'
	$('ul').on('click', '.btn-lst-mod', function() {
		var x = prompt('Change task');
		x = '<li>' + x + btn + '</li>';

		//calls btn parent li and replaces with modified prompt
		$(this).parents('li').replaceWith(x);
	});

	$('.btn-add').click(function() {
		var x = prompt('Enter task');

		taskList.push(x);

		var newItem = '<li>' + x + btn + '</li>';

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