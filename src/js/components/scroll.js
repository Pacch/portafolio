// detectar el scroll

// formas de detectar el scroll;
// forma1
// const getCurrentScroll =  window.scrollX;
// forma2
// const getCurrentScroll =  document.body.scrollTop;



$('a[href*="#"]:not([href="#"])').click( function(e) {
    e.preventDefault();
    let anchor = 0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()){
        anchor=$(document).height()-$(window).height();
    }else{
     anchor = $(this.hash).offset().top - 24 ;
    }
  $('html,body').stop().animate({scrollTop:anchor}, 750,'swing');
});

$('.scroll-link').click(function() {
    $(this).parent().find('a').removeClass('highlight');
    $(this).addClass('highlight');
});
