// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
  var setPastPresentFuture = function () {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    var plannerHours = $('[id^="hour-"]');
    plannerHours.each(function () {
      const id = $(this).attr("id");
      console.log(id);
      const endingNumber = id.split("-")[1];
      console.log(endingNumber);

      if (parseInt(endingNumber) > currentHour) {
        $(this).addClass("future");
      } else if (parseInt(endingNumber) < currentHour) {
        $(this).addClass("past");
      } else if (parseInt(endingNumber) === currentHour) {
        $(this).addClass("present");
      }
    });
  };

  setPastPresentFuture();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


// TODO: Add code to display the current date in the header of the page.
var clock = setInterval(function() {
    let today = dayjs();
    let time = today.format("dddd, MMMM D YYYY, HH:mm:ss");
    $("#currentDay").text(time);
    console.log(today.hour());
    if (today.hour() > 17) {
      $("#currentDay").text("It's after 5pm, go home!");
    } else if (today.hour() < 9) {
      $("#currentDay").text("It's before 9am, You're early!");
    }
  }, 1000);
  

  clock;
});
