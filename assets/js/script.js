// Use day.js to grab the date and time info.
var today = dayjs();

// Use current date and time as text for <p> element with id of "currentDay"
$('#currentDay').text(today.format('MMMM D, YYYY  h:mm a')); // Formats date and time from dayjs

// saveBtn click event listener
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var inputText = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var hourBlock = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(hourBlock, inputText);
});

// Pull calendar items from local storage
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// This function tracks the time and color codes the rows as past, present or future
function trackEvent() {
  // get current hour
  var currentHour = today.hour();

  // loop over each time block
  $('.time-block').each(function () {
    var timeBlock = parseInt($(this).attr('id').split("hour")[1]);

    // if the time Id attribute is before the current hour, add the past class
    if (timeBlock < currentHour) {
      $(this).addClass('past');
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeBlock === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// call the trackEvent function
trackEvent();