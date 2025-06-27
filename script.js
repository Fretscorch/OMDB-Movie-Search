$(document).ready(function(){
    $("#searchBtn").on("click", function() {
      var searchTerm = $("#searchTerm").val();
      var searchType = $("#searchType").val();

      var endpointUrl = "https://www.omdbapi.com/?s=" + searchTerm + "&type=" + searchType + "&apikey=130d2b6b";

      $.getJSON(endpointUrl, function(result) {
        if (result.Response == "True") {

          function createListItem() {
              let newLi = $("<li></li>");
              newLi.attr("class", "list-group-item");
            return newLi;
          }

          $("#searchResults").empty();
          
          for(let movie of result.Search) {
            
            var newDiv = $("<div></div>");
            newDiv.attr("class", "alert alert-primary");

            var newUl = $("<ul></ul>");
            newUl.attr("class", "list-group");
            newUl.attr("id", "movieInfo")
            
            var newImg = $("<img></img>");
            newImg.attr('src', movie.Poster);
            newImg.attr("class", "img-fluid");

            let newName = createListItem().html(movie.Title);
            let newYear = createListItem().html("Year: " + movie.Year);
            let newType = createListItem().html("Type: " + movie.Type)

            newUl.append(newName);
            newUl.append(newYear);
            newUl.append(newType);
            newUl.append(newImg);
            
            newDiv.append(newUl);

            $(newDiv).width(346);
            
            $("#searchResults").append(newDiv);
          }
        } else {
          alert(result.Error);
        }
      });
    });
});