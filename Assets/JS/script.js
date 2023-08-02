// The $ function indicates that the enclosed code will execute when the document is ready.
$(function () {

  // When a click event is triggered on a button with the class of 'saveBtn', this function is called.
  $(".saveBtn").on("click", function () {
    // 'timeSlot' is set to the 'id' of the parent element of the button that was clicked.
    let timeSlot = $(this).parent().attr("id");

    // 'task' is set to the trimmed value of the 'description' sibling element of the button that was clicked.
    let task = $(this).siblings(".description").val().trim();

    // The task is stored in localStorage with the key being 'timeSlot'.
    localStorage.setItem(timeSlot, task);
  });

  // 'setPastPresentFuture' is a function that assigns class names to elements based on the current time.
  var setPastPresentFuture = function () {

    // 'currentHour' is set to the current hour according to dayjs.
    var currentHour = dayjs().hour();

    // Logging the current hour for debugging purposes.
    console.log(currentHour);

    // 'plannerHours' is a jQuery object that contains all elements with an id that starts with "hour-".
    var plannerHours = $('[id^="hour-"]');

    // This is a loop that operates on each element in 'plannerHours'.
    plannerHours.each(function () {

      // 'id' is the id of the current element in the loop.
      const id = $(this).attr("id");

      // Logging the id for debugging purposes.
      console.log(id);

      // 'endingNumber' is the number portion of the id string.
      const endingNumber = id.split("-")[1];

      // Logging the ending number for debugging purposes.
      console.log(endingNumber);

      // The following if-else if block assigns class names to the current element based on whether the 'endingNumber' is greater, less than, or equal to 'currentHour'.
      if (parseInt(endingNumber) > currentHour) {
        $(this).addClass("future");
      } else if (parseInt(endingNumber) < currentHour) {
        $(this).addClass("past");
      } else if (parseInt(endingNumber) === currentHour) {
        $(this).addClass("present");
      }
    });
  };
  // Invoke the function setPastPresentFuture
  setPastPresentFuture();

  // This function fills the 'description' child of each '.time-block' element with the respective value from local storage.
  $(function () {
    $(".time-block").each(function () {

      // 'timeSlot' is the id of the current '.time-block' element.
      let timeSlot = $(this).attr("id");

      // The value of the 'description' child element is set to the value of 'timeSlot' from local storage.
      $(this).children(".description").val(localStorage.getItem(timeSlot));
    });
  });

  // The 'clock' variable is set to an interval function that updates every second (1000 milliseconds).
  var clock = setInterval(function() {

    // 'today' is the current time according to dayjs.
    let today = dayjs();

    // 'time' is the current time formatted as "day of week, month day year, hours:minutes:seconds".
    let time = today.format("dddd, MMMM D YYYY, HH:mm:ss");

    // The text of the element with the id 'currentDay' is set to 'time'.
    $("#currentDay").text(time);

    // Logging the current hour for debugging purposes.
    console.log(today.hour());

    // If the current hour is greater than 17 (5 PM), the text of '#currentDay' is changed.
    if (today.hour() > 17) {
      $("#currentDay").text("It's after 5pm, go home!");

    // If the current hour is less than 9 (9 AM), the text of '#currentDay' is changed.
    } else if (today.hour() < 9) {
      $("#currentDay").text("It's before 9am, You're early!");
    }
  }, 1000);

});
