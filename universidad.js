$( document ).ready(function(){
  //$(".img-girl").hover(function(){
    //$(".hover-img").toggleClass("hidden");
    //$(".drop-menu-perfil").toggleClass("hidden");
  //});

  $(".open-eye").click(function(){
  	$(this).parent().find(".faltas").toggle();
  	$(this).parent().find(".promedios").toggle();
  	$(this).hide();
  });
	  	$(".faltas").click(function(){
		  	$(this).parent().find(".open-eye").toggle();
		  	$(this).parent().find(".promedios").toggle();
		  	$(this).hide();
	});
	  	$(".promedios").click(function(){
		  	$(this).parent().find(".faltas").toggle();
		  	$(this).parent().find(".promedios").toggle();
		  	$(this).hide();
	});


});