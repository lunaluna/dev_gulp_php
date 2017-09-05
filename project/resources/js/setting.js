'use strict';

// scroll
(function($){
  $('a[href^="#"]').on('click',function(){
    var speed = 500;
    var href = $(this).attr('href');
    var offset = 0;
    if ($(href).length){
      var offTop = $(href).offset().top;
    }
    var position = offTop - offset;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
})(jQuery);

// pagetop
(function($){
  window.onload = function(){
    $('.pagetop').css('display','none');
    $(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
        $('.pagetop').fadeIn();
      } else {
        $('.pagetop').fadeOut();
      }
    });

/*
    $(window).bind('scroll', function() {
      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      if ( scrollHeight - scrollPosition  <= 400 ) {
        $('.pagetop').css({
          'position':'absolute',
          'bottom': '450px'
        });
      } else {
        $('.pagetop').css({
          'position':'fixed',
          'bottom': '50px'
        });
      }
    });
*/

    $('.pagetop a').click(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  };
})(jQuery);

// restrict-multibyte
(function($){
  $('.restrict_mb').change(function(){
    var str = $(this).val();
    str = str.replace( /[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    $(this).val(str);
  }).change();
})(jQuery);

