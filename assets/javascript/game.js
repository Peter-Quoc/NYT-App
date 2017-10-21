$(document).ready(function () {

	var APIkey = "00528d89e0954e6f9b6e5e992d064f42"; 

	$("button").on("click", function() {

	var userInput = $("#input").val();

	var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&page=2&sort=oldest&api-key=" + APIkey;

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});



});

});