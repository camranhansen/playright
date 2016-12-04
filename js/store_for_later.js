var jsoncookie;
var play = {"a":"a"};
function alertCookie() {
    x = getCookie("thewholeplay");
    y = JSON.parse(x);
    console.log(y.name);
    getCookie("thewholeplay")

}


function store(thing) {
    var jsoncookie = JSON.stringify(thing);
    document.cookie = "thewholeplay=" + jsoncookie;
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}