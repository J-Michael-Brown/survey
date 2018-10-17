


$(document).ready(function() {
  $("form#booking").submit(function(event) {
    event.preventDefault();
    var nameInput = ($("#name").val());
    $(".name").text(nameInput);

    var foodInput = ($("#food").val());
    $(".food").text(foodInput);

    var dateInput = ($("#born").val());
    $(".born").text(dateInput);

    var timeInput = ($("#music").val());
    $(".music").text(timeInput);

    var colorInput = ($("#color").val());
    $(".color").text(colorInput);

    var flavorInput = $("input:radio[name=flavor]:checked").val(); //other hard one
    $(".flavor").text(flavorInput);

    var name = $("#name").val();
    var DoA = $("#DoA1").val();
    var date = $("#date1").val();
    var time = $("#time1").val();
    $("name").text(name);
    $("date").text(name);
    $("time").text(name);
    $("DoA").text(name);
    $("#appointment-modal").toggle();
    event.preventDefault();
  });
});
