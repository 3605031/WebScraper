// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<div data-id='" + data[i]._id + "'>" + "<h3>"+data[i].title+"</h3>" + "<button type='button' class='save_article'>Save</button>" + "<br />" + data[i].sypnosis + "</div>");
  }
});

//When you save article
$(document).on("click", ".save_article", function() {

var thisId = $(this).parents().attr("data-id");
console.log(thisId)
$.ajax({
    method: "POST",
    url: "/save_article/"+thisId
})

})



// // When you click the savenote button
// $(document).on("click", ".save_article", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   console.log(thisId);
//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId,
//     data: {
//       // Value taken from title input
//       title: $("#titleinput").val(),
//       // Value taken from note textarea
//       body: $("#bodyinput").val
// ()
//     }
//   })
//     // With that done
//     .done(function(data) {
//       // Log the response
//       console.log(data);
//       // Empty the notes section
//       $("#notes").empty();
//     });

//   // Also, remove the values entered in the input and textarea for note entry
//   $("#titleinput").val("");
//   $("#bodyinput").val("");
// });