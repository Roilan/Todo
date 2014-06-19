$(document).ready(function() {

	var taskList = {name: ''};

	$('.btn-add').click(function() {
		var x = prompt('Enter task');
		taskList.name = x;	

		$('ul').append('<li>' + taskList.name + '</li>');
		console.log(taskList.name);


		// resets click color and click functionality to new list
		$('li').css('color', 'black');
		
		$('li').click(function() {
			$(this).css('color', 'red');
		});
	});

	$('.btn-clear').click(function() {
	});


});