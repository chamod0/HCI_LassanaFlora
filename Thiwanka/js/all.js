$(document).ready(function(){
  $('.scroll-top').hide();

   // hide all the p section except first one
	var contentHide = $('.container > ul > li > p');
	contentHide.hide();
	contentHide.first().show();
	contentHide.first().parent().find('img').toggleClass('rotate');


   // click h3 to toggle p section
	var contentToggle = $('.container > ul > li > h3');
   contentToggle.click(function(){
   	$(this).parent().find('p').slideToggle();
   	$(this).parents().siblings().find('p').slideUp();

   	// click and arrow transform  
   	$(this).find('img').toggleClass('rotate');
   	$(this).parents().siblings().find('img').removeClass('rotate');
   })


   // section-move  is scroll move to target 
    $('.section-move').click(function(event) {
        event.preventDefault();
        var connect = $(this).attr('href');
        var position = $(connect).offset().top;
        $('body').stop().animate({
            scrollTop: position-80}, 1250, 'easeInOutExpo');
    });

    // scroll top button show and hide
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > '300' && $(window).width() > 768) {
            $('.scroll-top').show(300);
        } else {
            $('.scroll-top').hide(300);
        }
    });



    // scroll to top click
    $('.scroll-top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 700);
    });
})