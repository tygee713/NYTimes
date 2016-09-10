// console.log("loaded");

// $("#btnSubmit").on('click', function() {
//   var searchTerm = $("#searchterm");
//   var numResults = 1;
//   var startYear = 2015;
//   var endYear = 2016;
//   var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=02f755e84aa34b25bfb1063dadb369e2";





  function pullAPI(searchTerm, numResults, startYear, endYear) {
    var queryURL = "";

    if (startYear != 0 && endYear != 0) {
      queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=02f755e84aa34b25bfb1063dadb369e2";
    }
    else if (startYear !=0 && endYear == 0) {
      queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "0101&api-key=02f755e84aa34b25bfb1063dadb369e2";
    }
    else if (startYear == 0 && endYear != 0) {
      queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&end_date=" + endYear + "1231&api-key=02f755e84aa34b25bfb1063dadb369e2";
    }
    else if (startYear == 0 && endYear == 0) {
      queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=02f755e84aa34b25bfb1063dadb369e2";
    }
    // var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&api-key=02f755e84aa34b25bfb1063dadb369e2";
    var articles = [];

        $.ajax({ url: queryURL, method: 'GET'})
        .done(function(response) {
          var results = response.response;
          for (i=0;i<numResults;i++) {
            // var articleDiv = $("<div>");
            // //Title
            // console.log(results.docs[i].headline.main);
            // //Author
            // console.log(results.docs[i].keywords[0].value);
            // //Date
            // console.log(results.docs[i].pub_date);
            // //URL
            // console.log(results.docs[i].web_url);

            // articleDiv.append(results.docs[i].headline.main);
            // articleDiv.append(results.docs[i].keywords[0].value);
            // articleDiv.append(results.docs[i].pub_date);
            // articleDiv.append(results.docs[i].web_url));

            articles.push({
              'headline': 'results.docs[i].headline.main',
              'author': 'results.docs[i].keywords[0].value',
              'date': 'results.docs[i].pub_date',
              'URL': 'results.docs[i].web_url'
            });
          }
        });
      return articles;
  }

// });

