$( window ).resize(function() {
    if($(window).width() <=769) $('.top-bar').addClass("text-center");
    else $('div.social-media').removeClass("text-center");
    if($(window).width() <=768) $('div.social-media').removeClass("text-right");
    else $('div.social-media').addClass("text-right");
});