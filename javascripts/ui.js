console.log("loaded ui.js");
var searchterm = "";
var numrecs = "";
var startyear = 0;
var endyear = 0;
var response = "";

$("#btnSubmit").on("click", function () {
	//set variables to input values
	searchterm = $("#searchTerm").val();
	numrecs = $("#numRecs").val();
	startyear = $("#startYear").val();
	endyear = $("#endYear").val();
	
	//call backend for results
	response = pullAPI(searchterm, numrecs, startyear, endyear);
	console.log(response);

	//display results to screen
	for (var i=0; i < response.length; i++) {
		console.log(response[i].headLine);
		console.log(response[i].author);
		console.log(response[i].date);
		console.log(response[i].URL);
	}

	return false;
});

