var charNum = 0;
var charList = [];

function submit() {
	$('#enterInfo').submit(function(event) {
		var $inputTitle = $(event.target).find('#inputTitle'); //get the name element from the input box
		var title = $inputTitle.val(); //get the text from the name element
		var $inputSynopsis = $(event.target).find('#inputSynopsis'); //get the direction element from the input box
		var synopsis = $inputSynopsis.val(); //get the text from the direction element
		
		$("#char").append("<h1>"+title+"</h1>");
		$("#char").append("<p>"+synopsis+"</p>");
		return false;
	});

	$('#enterChar').submit(function(event) {
		var $inputCharName = $(event.target).find('#inputCharName'); //get the direction element from the input box
		var charName = $inputCharName.val(); //get the text from the direction element
		var $inputCharDescription = $(event.target).find('#inputCharDescription');
		var charDescription = $inputCharDescription.val();
		$("#char").append("<h1>"+charName+"</h1>");
		charNum += 1;
		return false;
	});

	// $('#enterChar').submit(function(event) {
	// }

	// $('#enterChar').submit(function(event) {
	// 	$("#char").append("<p>"+charDescription+"</p>");
	// 	return false;
	// });
}

function tpage() {
    submit();
}
$(document).ready(tpage);