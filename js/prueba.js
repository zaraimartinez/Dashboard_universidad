  $(window).scroll(function() {
  	// var scroll = $(this).scrollTop();
  	// $('#zarai').text("El scrollTop actual es: " + scroll);
    if ($(window).scrollTop() > ($(window).height() - 90)) {
      $(".menu").addClass('on-scroll');
    } else {
      $(".menu").removeClass('on-scroll');
    }
  });
