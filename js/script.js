var act = 0; //init act number
var scene = 0; //init scene number
var line = 0; //init line number
var play = ["!act!", "!scene!", ["Bob", "whisper", "It's alive!!!"]];
function load() {
	for(i=0; i<play.length; i++) {
		if (play[i] == "!act!") {
			addAct();
		} else if (play[i] == "!scene!") {
			addScene();
		}
		else {
			addLine(play[i][0], play[i][1], play[i][2]);
		}
	}
}
function update() {
	var objDiv = document.getElementById("script");
	objDiv.scrollTop = objDiv.scrollHeight;
}
function scrollTo(element) {
	$("#script").scrollTop($("#script").scrollTop() + $("#"+element).position().top);
}
function addLine(name, direction, text) {
	line += 1; //increment line number
	var id = 'a'+act.toString()+'s'+scene.toString()+'l'+line.toString(); //id name
	var directions = 0;
	for (var i = 0, len = text.length; i < len; i++) {
		if (text[i] == "#") {
			directions += 1
			if (directions % 2 == 1) {
				text = [text.slice(0, i), "<i>(", text.slice(i+1)].join('');
				len += 3;
			} else {
				text = [text.slice(0, i), ")</i>", text.slice(i+1)].join('');
				len += 4;
			}
		}
	}
	if (name != "") {
		$("#script").append('<table class="line" id="'+id+'"><tr></tr></table>'); //add line div
		if (direction != "") {
			$("#"+id).append('<td class="nameHolder"><span class="name">'+name+'</span> <span class="direction"> ('+direction+')</span></td>');
		} else {
			$("#"+id).append('<td class="nameHolder"><span class="name"'+name+'</span></td>');
		}
		$("#"+id).append('<td class="text">'+text+'</td>');
	} else {
		$("#script").append('<div class="stageDirection" id="'+id+'">'+text+'</div>');
	}
}
function addAct() {
	act += 1;
	scene = 0;
	line = 0;
	var act_content = "Act "+act.toString();
	var act_id = "act"+act.toString();
	$("#script").append("<h1 class='act' id=\""+act_id+"\">"+act_content+"</h1>");
	$("#toc").append('<button class="heading" onclick="scrollTo(\''+act_id+'\')">'+act_content+'</button>');
}
function addScene() {
	scene += 1;
	line = 0;
	var scene_content = "Scene "+scene.toString();
	var scene_id = "scene"+act.toString()+"-"+scene.toString();
	$("#script").append("<h2 class='scene' id=\""+scene_id+"\">"+scene_content+"</h2>");
	$("#toc").append('<button class="subheading" onclick="scrollTo(\''+scene_id+'\')">'+scene_content+'</button>');
}
function submit() {
	$('#enterLine').submit(function(event) {
		var $inputName = $(event.target).find('#inputName'); //get the name element from the input box
		var name = $inputName.val(); //get the text from the name element
		var $inputDirection = $(event.target).find('#inputDirection'); //get the direction element from the input box
		var direction = $inputDirection.val(); //get the text from the direction element
		var $inputText = $(event.target).find('#inputText'); //get the direction element from the input box
		var text = $inputText.val(); //get the text from the direction element
		line += 1; //increment line number
		var id = 'a'+act.toString()+'s'+scene.toString()+'l'+line.toString(); //id name
		var directions = 0;
		for (var i = 0, len = text.length; i < len; i++) {
			if (text[i] == "#") {
				directions += 1
				if (directions % 2 == 1) {
					text = [text.slice(0, i), "<i>(", text.slice(i+1)].join('');
					len += 3;
				} else {
					text = [text.slice(0, i), ")</i>", text.slice(i+1)].join('');
					len += 4;
				}
			}
		}
		if (name != "") {
			$("#script").append('<div class="line" id="'+id+'"></div>'); //add line div
			if (direction != "") {
				$("#"+id).append('<div class="nameHolder"><span class="name">'+name+'</span> <span class="direction"> ('+direction+')</span></div>');
			} else {
				$("#"+id).append('<div class="nameHolder"><span class="name"'+name+'</span></div>');
			}
			$("#"+id).append('<div class="text">'+text+'</div>');
		} else {
			$("#script").append('<div class="stageDirection" id="'+id+'">'+text+'</div>');
		}
		play.push([name, direction, text]);
		update();
		return false;
	});
	$('#addAct').submit(function(event) {
		act += 1;
		scene = 0;
		line = 0;
		var act_content = "Act "+act.toString();
		var act_id = "act"+act.toString();
		$("#script").append("<h1 class='act' id=\""+act_id+"\">"+act_content+"</h1>");
		$("#toc").append('<button class="heading" onclick="scrollTo(\''+act_id+'\')">'+act_content+'</button>');
		update();
		play.push("!act!");
		return false;
	});
	$('#addScene').submit(function(event) {
		scene += 1;
		line = 0;
		var scene_content = "Scene "+scene.toString();
		var scene_id = "scene"+act.toString()+"-"+scene.toString();
		$("#script").append("<h2 class='scene' id=\""+scene_id+"\">"+scene_content+"</h2>");
		$("#toc").append('<button class="subheading" onclick="scrollTo(\''+scene_id+'\')">'+scene_content+'</button>');
		update();
		play.push("!scene!");
		return false;
	});
}
function main() {
	load();
    submit();
    update();
}
$(document).ready(main);
