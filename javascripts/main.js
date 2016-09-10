
console.log("loaded main.js");
var apiKey = "02f755e84aa34b25bfb1063dadb369e2";

// Call the NY Times API to get the articles based on the arguments passed by the UI
function pullAPI() {
var queryURL = "";

return ("headling", "author", "date", "url");

$.ajax({ url: queryURL, method: 'GET' })
 .done(function (response) {
	console.log(response);
	

 });
}


