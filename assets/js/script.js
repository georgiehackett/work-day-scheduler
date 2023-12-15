// Display the current day at the top of the calender when a user opens the planner.

var $currentDayEl = $('#currentDay');
console.log($currentDayEl);

var currentDayDate = dayjs().format('[Today is: ] dddd, MMMM D, YYYY h:mm A');
console.log(currentDayDate);

$currentDayEl.text(currentDayDate);