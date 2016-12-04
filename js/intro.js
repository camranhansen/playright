var charNum = 0;
var play_title = "";
var play_synopsis = "";
var characters = [];
function submit() {
	$('#enterInfo').submit(function(event) {
		var $inputTitle = $(event.target).find('#inputTitle'); //get the name element from the input box
		var title = $inputTitle.val(); //get the text from the name element
		var $inputSynopsis = $(event.target).find('#inputSynopsis'); //get the direction element from the input box
		var synopsis = $inputSynopsis.val(); //get the text from the direction element
		play_title = title;
		play_synopsis = synopsis;
		window.location.href = "index.html";
		return false;
	});

	$('#enterChar').submit(function(event) {
		var $inputCharName = $(event.target).find('#inputCharName'); //get the direction element from the input box
		var charName = $inputCharName.val(); //get the text from the direction element
		var $inputCharDescription = $(event.target).find('#inputCharDescription');
		var charDescription = $inputCharDescription.val();
		$("#char").append("<p><b>"+charName+":</b> "+charDescription+"</p>");
		charNum += 1;
		characters.push([charName, charDescription]);
		return false;
	});
}

function tpage() {
    submit();
}
$(document).ready(tpage);
