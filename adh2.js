
$(function(){
    $(window).scroll(function (){
        $('.fadeIn').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });

    $(".faq-list-item").click(function(){
      var $answer=$(this).find('.answer');
      if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
      }else{
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');
      }
    });
    $('.slider').slick({
      accessibility: true,
      dots: true,
      autoplay: true,
      centerMode: true,
      centerPadding: '50px',
      responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 480,
    settings: {
      centerMode: false
    }
  }]
    });

});
