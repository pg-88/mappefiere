var xReq = new XMLHttpRequest();

var input='145';
    
var api_url = "http://127.0.0.1:8000/allstandn_stand="+input+"";

xReq.open("GET", api_url, true);

xReq.send();

console.log(xReq);