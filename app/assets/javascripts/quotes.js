var update_saying = function() {
    $.ajax("/random", {
      error: function() {alert("Something went wrong")},
      success: function(data) {
        console.log(data)
        $("#quote_box").text(data.text)
        $("#author_box").text("-" + data.author)
      }
  })
}



$(document).on("ready", function() {
  $("#that_button").on("click", update_saying) 
})