$(document).ready(function () {
  //Adding task to board when pressing ADD
  $("#add").click(function () {
    var textbox = $("#pendingTask").val();
    //Adding task to board only if there's something inside the textbox
    if (textbox.length > 0) {
      var number = $(".tasks").length;
      var new_number = number + 1;
      var cloned_div = $("#task-" + number);
      var $cloned = $(cloned_div)
        .clone()
        .attr("id", "task-" + new_number)
        .insertAfter("#task-" + number);
      $("#task-" + number)
        .append("HI")
        .css("display", "block")
        .html($("#pendingTask").val());
      $("#pendingTask").val("");
    }
  });
  //Adding task to board when pressing intro
  $("#pendingTask").on("keyup", function (e) {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
      var textbox = $("#pendingTask").val();
      if (textbox.length > 0) {
        var number = $(".tasks").length;
        var new_number = number + 1;
        var cloned_div = $("#task-" + number);
        var $cloned = $(cloned_div)
          .clone()
          .attr("id", "task-" + new_number)
          .insertAfter("#task-" + number);
        $("#task-" + number)
          .append("HI")
          .css("display", "block")
          .html($("#pendingTask").val());
        $("#pendingTask").val("");
      }
    }
  });
  // Striking tasks if clicking inside
  $(".list").on("click", "div", function () {
    $(this).toggleClass("strike");
  });

  console.log("document ready");
});
