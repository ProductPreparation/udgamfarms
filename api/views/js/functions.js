/*---------------------------------------------------------- Home Page : Booking Form validation ----------------------------------------------------------*/
/* Function to restrict user from entering value greater than 500 in no_of_adults */
jQuery(document).ready(function($){
  $('#no_of_adults').on('keydown keyup change', function(e){
    if ($(this).val() > 500
      && e.keyCode !== 46 /* keycode for delete */
      && e.keyCode !== 8 /* keycode for backspace */
    ) {
      e.preventDefault();
      $(this).val(500);
    }
  });
});
/* Function to restrict user from entering value greater than 50 in no_of_rooms */
jQuery(document).ready(function($){
  $('#no_of_rooms').on('keydown keyup change', function(e){
    if ($(this).val() > 50
      && e.keyCode !== 46 /* keycode for delete */
      && e.keyCode !== 8 /* keycode for backspace */
    ) {
      e.preventDefault();
      $(this).val(50);
    }
  });
});