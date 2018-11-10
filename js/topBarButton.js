$("#top_bar_toggle_btn").click(function(){
    $(".top-bar-others").slideToggle();
    $(this).find("i").toggleClass("display-none");
});