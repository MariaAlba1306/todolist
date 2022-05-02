$(document).ready(function () {
  //Adding task to board when pressing ADD
  $("#add").click(function () {
    cloneTask();
  });
  //Adding task to board when pressing intro
  $("#pendingTask").on("keyup", function (e) {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
      cloneTask();
    }
  });
  //Cloning task function
  function cloneTask() {
    var textbox = $("#pendingTask").val();
    if (textbox.length > 0) {
      var number = $(".tasks").length;
      var new_number = number + 1;
      var cloned_div = $("#task-" + number);
      var $cloned = $(cloned_div)
        .clone()
        .attr("id", "task-" + new_number);
      $("#task-" + number).css("display", "block");
      $("#task-" + number).append(`<div class="elements">
                <img
                  src="./close.png"
                  width="20px"
                  alt="hello" class="${number}"
                /><p>${$("#pendingTask").val()}</p>
              </div>`);

      $("#pendingTask").val("");
      $($cloned).insertAfter("#task-" + number);
    }
  }
  // Striking tasks if clicking inside img
  $("body").on("click", "img", function (number) {
    var number = $(".tasks").length;
    var className = $(this).attr("class");
    $("#task-" + className).toggleClass("strike");
  });

  console.log("document ready");
});
