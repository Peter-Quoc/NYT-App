$(document).ready(function () {

	$("<div>").empty();

	var APIkey = "00528d89e0954e6f9b6e5e992d064f42"; 

	$("button").on("click", function() {

		var termin = $("#term-input").val();
		var limit = $("#limit-input").val();
		var startYr = $("#start-year").val();
		var EndYr = $("#end-year").val();
		var results =;



		var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + termin + "&page=2&sort=newest&api-key=" + APIkey;

		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {
		  console.log(result);
		  var results = result;

		}).fail(function(err) {
		  throw err;
		});

		searchfunc function() {
			console.log(result.reponse.docs[i].snippet);
			console.log(result.reponse.docs[i].headline.main);
			$("#snippet").append(result.reponse.docs[i].snippet)
		    $("#headline").append(result.reponse.docs[i].headline.main) 
		}


		for (var i = 0; i < limit; i++) {
			
			$("#results").append(searchfunc())
			searchfunc();

		}

});

});