$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul").prepend("<li>Hello!</li>");
  $("ul").children().first().css("background-color","green");
$("ul#web").children().first().css("background-color","yellow");
  });

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
    $("ul#user").children().last().remove();

  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });


});
