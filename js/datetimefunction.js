jQuery(function(){
  jQuery('#date_check_in').datetimepicker({
   formatDate:'Y/m/d',
   formatTime:'H:i',
   minDate:0,
   onShow:function( ct ){
     this.setOptions({
       maxDate:jQuery('#date_check_out').val()?jQuery('#date_check_out').val():false
     });
   },
   onSelect: function(date) {
     var checkOut = jQuery('#date_check_out');
     var minDate = new Date(date);
     minDate.setDate(minDate.getDate() + 1);
     checkOut.datetimepicker('setOptions', {
       minDate: minDate
     });
   },
   timepicker:true
  });

  jQuery('#date_check_out').datetimepicker({
   formatDate:'Y/m/d',
   formatTime:'H:i',
   minDate:0,
   onShow:function( ct ){
     this.setOptions({
       minDate:jQuery('#date_check_in').val()?jQuery('#date_check_in').val():false
     });
   },
   onSelect: function(date) {
     var checkIn = jQuery('#date_check_in');
     checkIn.datetimepicker('setOptions', {
       maxDate: date
     });
   },
   timepicker:true
  });
});
