var myJsonString;
function alertCookie() {
  x = getCookie("thewholeplay");
  y = JSON.parse(x);
  console.log(y.name);

}

function dothings(){
	var play = {"name":"bob"};
	var myJsonString = JSON.stringify(play);
	alert(myJsonString);

	document.cookie = "thewholeplay="+myJsonString;
	alert(play.name);
	// document.cookie = "favorite_food=tripe";
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}