$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#about');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#000000');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }
});