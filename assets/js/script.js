// Display the current day at the top of the calender when a user opens the planner.

var $currentDayEl = $("#currentDay");

var currentDayDate = dayjs().format("[Today is: ] dddd, MMMM D, YYYY h:mm A");

$currentDayEl.text(currentDayDate);

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

var $descriptionEl = $(".description");
var currentHour = dayjs().format("H");
// console.log(currentHour);

$descriptionEl.each(function () {
  var blockHour = this.id;
  // console.log(blockHour);
  if (blockHour === currentHour) {
    $(this).toggleClass("present");
  } else if (blockHour < currentHour) {
    $(this).toggleClass("past");
  } else if (blockHour > currentHour) {
    $(this).toggleClass("future");
  }
});
