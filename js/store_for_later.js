var jsoncookie;
var play = {"a":"a"};
function alertCookie() {
    x = getCookie("thewholeplay");
    y = JSON.parse(x);
    console.log(y.name);
    getCookie("thewholeplay")
}

function dothings() {
    play["1"].
    var jsoncookie = JSON.stringify(play);
    alert(jsoncookie);

    document.cookie = "thewholeplay=" + jsoncookie;
    alert(play.name);
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}