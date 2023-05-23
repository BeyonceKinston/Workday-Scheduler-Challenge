$(function hour() {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  // Set this function to get the current date and format it
  $('.saveBtn').on('click', function() { /* Listen for click events on the button to save. */
    // Extract the hour value from the parent element "id"
    var hour = $(this).parent().attr('id');
    // Extract the description value from the sibling element with class "description"
    var description =$(this).siblings('.description').val();
    // Saved the value of hour and description to the local storage.
    localStorage.setItem(hour, description);

  });
// Loop through each time block
  $('.time-block').each(function(){
    // Able to get the current hour using dayjs.
    var currentHour = dayjs().hour();
    // Took the hour value from the time block ID convert it to a number
    var hour = parseInt($(this).attr('id').replace('hour-', ''));


    // Add the appropriate class to the time block depending if its past,present,or future. 
    if(hour < currentHour){
      $(this).addClass('past');
    }else if(hour === currentHour){
      $(this).addClass('present');
    }else{
      $(this).addClass('future');
    }
  });
  // Loop through each time block again.
  $('.time-block').each(function(){
    // Extract the hour value from the time block ID
    var hour = $(this).attr('id');
    // Get the corresponding description from local storage
    var description = localStorage.getItem(hour);

// If a description exists, insert it into the corresponding "description" element
    if(description) {
      $(this).children('.description').val(description);

    }
  });
});
