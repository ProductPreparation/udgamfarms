jQuery(document).ready(function($){
  $('#no_of_adults').on('keydown keyup change', function(e){
    if ($(this).val() > 500
      && e.keyCode !== 46 // keycode for delete
      && e.keyCode !== 8 // keycode for backspace
    ) {
      e.preventDefault();
      $(this).val(500);
    }
  });
});

jQuery(document).ready(function($){
  $('#no_of_rooms').on('keydown keyup change', function(e){
    if ($(this).val() > 50
      && e.keyCode !== 46 // keycode for delete
      && e.keyCode !== 8 // keycode for backspace
    ) {
      e.preventDefault();
      $(this).val(50);
    }
  });
});