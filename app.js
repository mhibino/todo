$(document).ready(function() {

  $("#todoForm").submit(function(e) {
    e.preventDefault();
    var newItem = $("#input").val();
    $("#tasks").append("<li class='listitem'><span class='fa fa-fw fa-times delete'></span>" + newItem + "</li>")
    $("#input").val('');
  });

  $(document).on("click",".delete", function() {
    $(this).parent().remove();
  });

  $(document).on("click",".listitem", function() {
    $(this).addClass("strike");
  });

});