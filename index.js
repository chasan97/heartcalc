document.querySelector(".calc-button").addEventListener("click", function() {
  calc();
});

document.querySelector(".clear-button").addEventListener("click", function() {
  location.reload();
});

function calc() {
  var timetext;
  var beats = document.querySelector(".beats-input").value;
  var time = document.querySelector("#time").value;
  if (beats === "") {
    document.querySelector(".beats-input").style.borderColor = "red";
    return;
  }
  else{
    document.querySelector(".beats-input").style.borderColor = "black";
  }
  switch (time) {
    case "hour":
      var beats = 60 * beats;
      timetext="Beats in a hour: ";
      break;
    case "day":
      var beats = 1440 * beats;
      timetext="Beats in a day: ";
      break;
    case "week":
      var beats = 10080 * beats;
      timetext="Beats in a week: ";
      break;
      case "month":
        var beats = 438290639 * beats;
        timetext="Beats in a month: ";
        break;
    case "year":
      var beats = 6525948766 * beats;
      timetext="Beats in a year: ";
      break;
    default:

  }

  document.querySelector(".result").innerText = timetext + beats;

}
